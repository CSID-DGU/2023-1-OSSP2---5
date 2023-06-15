import { Box, Tabs, Tooltip, Tab, useTheme, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../theme";
import Graph from "./Graph";
import TabPanel from "./TabPanel";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { BriefTaskInfoType } from "../types/BriefTaskInfo.typs";
import axios, { AxiosResponse } from "axios";
import { API_HOST, CREATED_RESPONCE, MAIN_DASHBOARD_PATH, MAIN_PATH, OK_RESPONCE } from "../constants";
import { useNavigate } from "react-router-dom";
import { DocumentInfoType } from "../types/DocumentInfo.type";
import DocumentPanel from "./DocumentPanel";
import { Right } from "../Enum/Right.enum";
import { BookmarkListItemType } from "../types/BookmarkListItem.type";

type TaskContentProps = {
  isMember: boolean;
  right: Right;
  tasks: BriefTaskInfoType[];
  projectId: string;
  parentId: string;
  bookmarkList: BookmarkListItemType[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  forceRerenderingProject: () => void;
};

const TaskContent: React.FC<TaskContentProps> = ({
  isMember,
  right,
  tasks,
  projectId,
  parentId,
  bookmarkList,
  setIsLoading,
  forceRerenderingProject,
}) => {
  /* THEME */
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  /* STATES */
  const [dummyState, setDummyState] = useState<object>({});
  const [rightTabNumber, setRightTabNumber] = useState<number>(0);
  const [docInfos, setDocInfos] = useState<DocumentInfoType[]>([]);

  /* USE_NAVIGATE */
  const navigate = useNavigate();

  /* USE_EFFECT */
  useEffect(() => {
    getDocuments();
  }, [dummyState]);

  /* FUNCTIONS */
  const getDocuments = async () => {
    try {
      const res: AxiosResponse = await axios.get(`${API_HOST}/task/content/${parentId}`, {
        headers: {
          withCredentials: true,
          crossDomain: true,
          credentials: "include",
        },
      });

      if (res.status === OK_RESPONCE) {
        setDocInfos(res.data);
        return;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(`Failed to get document information of task ${parentId}..`);
        navigate(MAIN_PATH + MAIN_DASHBOARD_PATH);
      }
    }
  };

  const SetDocumentTabs = () => {
    const docTabs = [] as React.JSX.Element[];

    let tabNumber = 1;

    for (const docInfo of docInfos) {
      docTabs.push(
        <Tooltip title={docInfo.title}>
          <Tab icon={<DescriptionOutlinedIcon />} {...a11yProps(tabNumber++)} />
        </Tooltip>,
      );
    }

    return docTabs;
  };

  const SetDocumentInfos = (tabNumber = 1) => {
    const docTabPanels = [] as React.JSX.Element[];

    for (const docInfo of docInfos) {
      docTabPanels.push(
        <DocumentPanel
          right={right}
          projectId={projectId}
          currentTab={rightTabNumber}
          setCurrentNum={setRightTabNumber}
          tabNumber={tabNumber++}
          docInfo={docInfo}
          forceRerenderContent={forceRerenderContent}
          setIsLoading={setIsLoading}
        />,
      );
    }

    return docTabPanels;
  };

  const forceRerenderContent = () => {
    setDummyState({});
  };

  /* HANDLER */
  const handleRightTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setRightTabNumber(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleDocAddClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const res: AxiosResponse = await axios.post(`${API_HOST}/task/content/create/${parentId}`, {
        headers: {
          withCredentials: true,
          crossDomain: true,
          credentials: "include",
        },
      });

      if (res.status === CREATED_RESPONCE) {
        setDummyState({});
        return;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(`Failed to cerate document of task ${parentId}..`);
      }
    }
  };

  return (
    <Box margin="10px" bgcolor={colors.primary[400]} borderRadius="8px" width="100%">
      <Box
        sx={{
          "&": { borderBottom: 1, borderColor: colors.grey[100], display: "flex", justifyContent: "space-between" },
          "& .Mui-selected svg": { color: colors.blueAccent[400] },
        }}
      >
        {/* TABS */}
        <Tabs
          value={rightTabNumber}
          onChange={handleRightTabChange}
          TabIndicatorProps={{ style: { backgroundColor: colors.blueAccent[400] } }}
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tooltip title="Child Tasks">
            <Tab icon={<AccountTreeOutlinedIcon />} {...a11yProps(0)} />
          </Tooltip>
          {SetDocumentTabs()}
        </Tabs>

        {/* ADDING DOCUMENT BUTTON */}
        <Box display="flex" justifyContent="center" alignItems="center" m="0 10px">
          <IconButton onClick={handleDocAddClick} disabled={!isMember}>
            <AddOutlinedIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </Box>

      <TabPanel value={rightTabNumber} index={0}>
        <Graph
          tasks={tasks}
          parentId={parentId}
          forceRerenderingProject={forceRerenderingProject}
          projectId={projectId}
          right={right}
          bookmarkList={bookmarkList}
        />
      </TabPanel>

      {SetDocumentInfos()}
    </Box>
  );
};

export default TaskContent;
