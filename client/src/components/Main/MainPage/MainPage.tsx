import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { API_HOST } from "../../../config/constants";
import axios, { AxiosResponse } from "axios";
import styles from "./MainPage.module.css";
import LSideBar from "../../LSideBar/LSideBar";
import RSideBar from "../../RSideBar/RSideBar";
import MainSection from "../MainSect/MainSect";

interface Project {
    id: string;
    title: string;
    description: string;
    type: string;
    encodedImg: string;
    createdAt: string;
    userToProjects: {
        right: string;
        user: {
            id: string;
            firstName: string;
            lastName: string;
            encodedImg: string;
        };
    }[];
    tasks: {
        id: string;
        title: string;
        description: string;
        type: string;
        status: string;
        priority: string;
        startDate: string;
        endDate: string;
        createdAt: string;
        modifiedAt: string;
        userToTasks: {
            right: string;
            user: {
                id: string;
                firstName: string;
                lastName: string;
                encodedImg: string;
            };
        }[];
        comments: {
            id: string;
            createdAt: string;
            modifiedAt: string;
            content: string;
            pinned: boolean;
            projectId: string;
        }[];
    }[];
    comments: {
        id: string;
        createdAt: string;
        modifiedAt: string;
        content: string;
        pinned: boolean;
        projectId: string;
    }[];
}

const MainPage: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentTask, setCurrentTask] = useState<any>(); // Task에 맞춰서 추후 정의

    const handleToggleSidebar = () => {
        setSidebarOpen((prevState) => !prevState);
    };

    const handleProjectClick = async (projectId: string) => {
        try {
            console.log("handleProjectClick");
            const res: AxiosResponse = await axios.get(`${API_HOST}/project/${projectId}`, {
                headers: { Authorization: localStorage.getItem("access-token") },
            });

            console.log("handleProjectClick");
            console.log("res:", res.status);

            if (res.status === 200) {
                const projectData: Project = res.data;
                setSelectedProject(projectData);
                setCurrentTask(projectData.tasks[0]); // Set initial currentTask
            } else {
                console.log("error");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("error");
            }
        }
    };

    const handleUpdateCurrentTask = (task: any) => {
        setCurrentTask(task);
    };

    return (
        <div className={`${styles.mainPage} ${!sidebarOpen ? styles.sidebarClosed : ""}`}>
            {sidebarOpen && <LSideBar onProjectClick={handleProjectClick} />}
            <button className={styles.toggleButton} onClick={handleToggleSidebar}>
                {sidebarOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
            </button>

            <div className={styles.mainSection}>
                <MainSection
                    currentTask={currentTask}
                    onUpdateCurrentTask={handleUpdateCurrentTask}
                    selectedProject={selectedProject}
                    onTaskPathClick={function (taskId: string): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            </div>
            {/* <RSideBar /> */}
        </div>
    );
};

export default MainPage;
