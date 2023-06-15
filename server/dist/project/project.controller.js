"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const user_entity_1 = require("../entity/user.entity");
const passport_1 = require("@nestjs/passport");
const get_user_decorator_1 = require("../decorator/get-user.decorator");
const project_info_validation_pipe_1 = require("../pipe/project-info-validation.pipe");
const project_info_dto_1 = require("./dto/project-info.dto");
const encoded_img_validation_pipe_1 = require("../pipe/encoded-img-validation.pipe");
const not_empty_string_validation_pipe_1 = require("../pipe/not-empty-string-validation.pipe");
const swagger_1 = require("@nestjs/swagger");
const sub_task_enum_1 = require("../enum/sub-task.enum");
const user_right_enum_1 = require("../enum/user-right.enum");
const update_doc_title_dto_1 = require("./dto/update-doc-title.dto");
const update_doc_content_dto_1 = require("./dto/update-doc-content.dto");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
        this.logger = new common_1.Logger("ProjectController");
    }
    getAllProjects(user, query) {
        this.logger.verbose(`User "${user.email}" trying to get his or her project list.`);
        return this.projectService.getAllProjects(user, query);
    }
    getAllBookmarkedProjects(user, query) {
        this.logger.verbose(`User "${user.email}" trying to get his or her bookmarked project list.`);
        return this.projectService.getAllBookmarkedProjects(user, query);
    }
    getProjectInfo(user, projectId) {
        this.logger.verbose(`User "${user.email}" trying to get the info of project "${projectId}".`);
        return this.projectService.getProjectInfo(user, projectId);
    }
    createProject(user, projectInfoDto) {
        this.logger.verbose(`User "${user.email}" trying to create project.`);
        return this.projectService.createProject(user, projectInfoDto);
    }
    updateProject(user, projectId, projectInfoDto) {
        this.logger.verbose(`User "${user.email}" trying to update project "${projectId}".`);
        return this.projectService.updateProject(user, projectId, projectInfoDto);
    }
    updateTitle(user, projectId, newTitle) {
        this.logger.verbose(`User "${user.email}" trying to update title of the project "${projectId}".`);
        return this.projectService.updateTitle(user, projectId, newTitle);
    }
    updateDescription(user, projectId, newDescription) {
        this.logger.verbose(`User "${user.email}" trying to update description of the project "${projectId}".`);
        return this.projectService.updateDescription(user, projectId, newDescription);
    }
    updateIcon(user, projectId, newIconBase64) {
        this.logger.verbose(`User "${user.email}" trying to update icon of the project "${projectId}".`);
        return this.projectService.updateIcon(user, projectId, newIconBase64);
    }
    updateBookmarkStatus(user, projectId, bookmarkStatus) {
        this.logger.verbose(`User "${user.email}" trying to update bookmark status of the project "${projectId}".`);
        return this.projectService.updateBookmarkStatus(user, projectId, bookmarkStatus);
    }
    deleteProject(user, projectId) {
        this.logger.verbose(`User "${user.email}" trying to delete project "${projectId}".`);
        return this.projectService.deleteProject(user, projectId);
    }
    invite(user, projectId, members) {
        this.logger.verbose(`User "${user.email}" trying to invite some people into project "${projectId}".`);
        return this.projectService.invite(user, projectId, members);
    }
    dismiss(user, projectId, members) {
        this.logger.verbose(`User "${user.email}" trying to dismiss some members from this project "${projectId}".`);
        return this.projectService.dismiss(user, projectId, members);
    }
    withdraw(user, projectId) {
        this.logger.verbose(`User "${user.email}" trying to withdraw from this project "${projectId}".`);
        return this.projectService.withdraw(user, projectId);
    }
    addCommment(user, projectId, content) {
        this.logger.verbose(`User "${user.email}" trying to comment on this project "${projectId}".`);
        return this.projectService.addComment(user, projectId, content);
    }
    addReply(user, commentId, content) {
        this.logger.verbose(`User "${user.email}" trying to reply on the comment "${commentId}".`);
        return this.projectService.addReply(user, commentId, content);
    }
    getAllComments(user, projectId, query) {
        this.logger.verbose(`User "${user.email}" trying to get all comments of this project "${projectId}".`);
        return this.projectService.getAllComments(user, projectId, query);
    }
    updateCommentContent(user, commentId, content) {
        this.logger.verbose(`User "${user.email}" trying to update content of the comment "${commentId}" in this project.`);
        return this.projectService.updateCommentContent(user, commentId, content);
    }
    updateCommentPinStatus(user, commentId, pinned) {
        this.logger.verbose(`User "${user.email}" trying to update pin status of the comment "${commentId}" in this project.`);
        return this.projectService.updateCommentFixStatus(user, commentId, pinned);
    }
    getAllDocs(user, projectId) {
        this.logger.verbose(`User "${user.email}" trying to get all project documents in the project ${projectId}`);
        return this.projectService.getAllDocs(user, projectId);
    }
    createDocument(user, projectId) {
        this.logger.verbose(`User "${user.email}" trying to create project document in the project ${projectId}`);
        return this.projectService.createDocument(user, projectId);
    }
    updateDocTitle(user, projectId, updateDocTitleDto) {
        this.logger.verbose(`User "${user.email}" trying to update the title of project document ${updateDocTitleDto.docId} in the project ${projectId}`);
        return this.projectService.updateDocTitle(user, projectId, updateDocTitleDto);
    }
    updateDocContent(user, projectId, updateDocContentDto) {
        this.logger.verbose(`User "${user.email}" trying to update the content of project document ${updateDocContentDto.docId} in the project ${projectId}`);
        return this.projectService.updateDocContent(user, projectId, updateDocContentDto);
    }
    deleteDocument(user, projectId, docId) {
        this.logger.verbose(`User "${user.email}" trying to delete the project document ${docId} in the project ${projectId}`);
        return this.projectService.deleteDocument(user, projectId, docId);
    }
    deleteComment(user, commentId) {
        this.logger.verbose(`User "${user.email}" trying to delete the comment "${commentId}" in this project.`);
        return this.projectService.deleteComment(user, commentId);
    }
};
__decorate([
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "Get all projects",
        description: "Get all projects to which the user belongs",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of projects",
        schema: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: { type: "string" },
                    title: { type: "string" },
                    description: { type: "string" },
                    type: { type: "enum", enum: [sub_task_enum_1.SubTask.GRAPH, sub_task_enum_1.SubTask.KANBAN, sub_task_enum_1.SubTask.LIST, sub_task_enum_1.SubTask.TERMINAL] },
                    encodedImg: { type: "string" },
                    progress: { type: "number", example: 0.37 },
                    userToProjects: {
                        type: "object",
                        properties: {
                            right: {
                                type: "enum",
                                enum: [
                                    user_right_enum_1.UserRight.ADMIN,
                                    user_right_enum_1.UserRight.COMPLETION_MOD,
                                    user_right_enum_1.UserRight.MEMBER_AND_TASK_MGT,
                                    user_right_enum_1.UserRight.MEMBER_MGT,
                                    user_right_enum_1.UserRight.TASK_MGT,
                                ],
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: "q", type: "string", description: "query string", required: false }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)("q")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllProjects", null);
__decorate([
    (0, common_1.Get)("/bookmarked"),
    (0, swagger_1.ApiOperation)({
        summary: "Get all bookmarked projects",
        description: "Get all bookmarked projects to which the user belongs",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of bookmarked projects",
        schema: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    id: { type: "string" },
                    title: { type: "string" },
                    encodedImg: { type: "string" },
                },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: "q", type: "string", description: "query string", required: false }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)("q")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllBookmarkedProjects", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Get project information",
        description: "Get the information for the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an object to explain the project information",
        schema: {
            type: "object",
            properties: {
                title: { type: "string" },
                description: { type: "string" },
                type: { type: "enum", enum: [sub_task_enum_1.SubTask.GRAPH, sub_task_enum_1.SubTask.KANBAN, sub_task_enum_1.SubTask.LIST, sub_task_enum_1.SubTask.TERMINAL] },
                encodedImg: { type: "string" },
                createdAt: { type: "string", description: "UTC time format" },
                userToProjects: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            right: {
                                type: "enum",
                                enum: [
                                    user_right_enum_1.UserRight.ADMIN,
                                    user_right_enum_1.UserRight.COMPLETION_MOD,
                                    user_right_enum_1.UserRight.MEMBER_AND_TASK_MGT,
                                    user_right_enum_1.UserRight.MEMBER_MGT,
                                    user_right_enum_1.UserRight.TASK_MGT,
                                ],
                            },
                            isBookmarked: { type: "boolean" },
                            user: {
                                type: "object",
                                properties: {
                                    id: { type: "string" },
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    encodedImg: { type: "string" },
                                    email: { type: "string" },
                                },
                            },
                        },
                    },
                },
                tasks: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            bookmarks: {
                                type: "array",
                                items: { type: "object", properties: { title: { type: "string" } } },
                            },
                        },
                    },
                },
                comments: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "string" },
                            createdAt: { type: "string", description: "UTC time format" },
                            modifiedAt: { type: "string", description: "UTC time format" },
                            content: { type: "string" },
                            pinned: { type: "boolean" },
                            projectId: { type: "string" },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user who sent the request is not a member of this project, the user is not eligible to view the information. So, returns an unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjectInfo", null);
__decorate([
    (0, common_1.Post)("/create"),
    (0, swagger_1.ApiOperation)({
        summary: "Create a project",
        description: "Create a project",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of user IDs that are not users of this site among the user IDs transmitted in the request.",
        schema: {
            type: "object",
            properties: {
                notFoundUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)(encoded_img_validation_pipe_1.EncodedImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        project_info_dto_1.ProjectInfoDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, common_1.Put)("/update/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Update project informations",
        description: "Update the information for the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of user IDs that are not users of this site among the user IDs transmitted in the request.",
        schema: {
            type: "object",
            properties: {
                notFoundUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)(common_1.ValidationPipe, project_info_validation_pipe_1.ProjectInfoValidationPipe, encoded_img_validation_pipe_1.EncodedImgValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, project_info_dto_1.ProjectInfoDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateProject", null);
__decorate([
    (0, common_1.Patch)("/update/title/:projectId"),
    (0, swagger_1.ApiOperation)({
        summary: "Update project title",
        description: "Update the title of the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "If succeed in updating title, return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not member or not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "projectId", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "New title string",
        schema: { type: "object", properties: { newTitle: { type: "string", example: "My new title!" } } },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId")),
    __param(2, (0, common_1.Body)("newTitle")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateTitle", null);
__decorate([
    (0, common_1.Patch)("/update/description/:projectId"),
    (0, swagger_1.ApiOperation)({
        summary: "Update project description",
        description: "Update the description of the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "If succeed in updating description, return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not member or not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "projectId", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "New description string",
        schema: { type: "object", properties: { newDescription: { type: "string", example: "My new description.." } } },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId")),
    __param(2, (0, common_1.Body)("newDescription")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateDescription", null);
__decorate([
    (0, common_1.Patch)("/update/icon/:projectId"),
    (0, swagger_1.ApiOperation)({
        summary: "Update project icon",
        description: "Update the icon of the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "If succeed in updating icon, return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not member or not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "projectId", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "New icon base64 string",
        schema: { type: "object", properties: { newIconBase64: { type: "string" } } },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId")),
    __param(2, (0, common_1.Body)("newIconBase64")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateIcon", null);
__decorate([
    (0, common_1.Patch)("/update/bookmark/:projectId"),
    (0, swagger_1.ApiOperation)({
        summary: "Update whether the project is bookmarked",
        description: "Update whether the project specified by the project ID is bookmarked.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "If succeed in updating bookmark status, return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not member or not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "projectId", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "New bookmark status",
        schema: { type: "object", properties: { bookmarkStatus: { type: "boolean" } } },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)("bookmarkStatus", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Boolean]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateBookmarkStatus", null);
__decorate([
    (0, common_1.Delete)("/delete/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Delete project",
        description: "Delete the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return nothing",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If the user is not the ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteProject", null);
__decorate([
    (0, common_1.Patch)("/invite/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Invite people",
        description: "Invite people to the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of user IDs that are not users of this site and already members of this project among the user IDs transmitted in the request.",
        schema: {
            type: "object",
            properties: {
                notFoundUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
                alreadyMemberUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you do not have permission to manage members of this project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)("members", common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Array]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "invite", null);
__decorate([
    (0, common_1.Patch)("/dismiss/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Dismiss members",
        description: "Dismiss members from the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return an array of user IDs that are not users of this site and not already members and ADMIN of this projectamong the user IDs transmitted in the request.",
        schema: {
            type: "object",
            properties: {
                notFoundUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
                alreadyNotMemberUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
                adminUserId: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you do not have permission to manage members of this project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "Receive an ID list of the members to be deported.",
        schema: {
            type: "object",
            properties: {
                members: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)("members", common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Array]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "dismiss", null);
__decorate([
    (0, common_1.Delete)("/withdraw/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Withdraw the project",
        description: "Withdraw the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you are not member of the project or ADMIN of, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "withdraw", null);
__decorate([
    (0, common_1.Post)("/comment/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Add comment on the project",
        description: "Add comment on the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you are not member of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiBody)({
        description: "content of the comment",
        schema: {
            type: "object",
            properties: {
                content: { type: "string" },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)("content", not_empty_string_validation_pipe_1.NotEmptyStringValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addCommment", null);
__decorate([
    (0, common_1.Post)("/reply/:commentId"),
    (0, swagger_1.ApiOperation)({
        summary: "Add reply on the comment",
        description: "Add reply on the comment specified by the comment ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Return nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no comment for the received project comment ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you are not member of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "comment UUID" }),
    (0, swagger_1.ApiBody)({
        description: "content of the reply",
        schema: {
            type: "object",
            properties: {
                content: { type: "string" },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("commentId", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)("content", not_empty_string_validation_pipe_1.NotEmptyStringValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "addReply", null);
__decorate([
    (0, common_1.Get)("/comment/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Get all comments",
        description: "Get all comments and replies on the project specified by the project ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Returns whether queried and an array of queried comments.",
        schema: {
            type: "object",
            properties: {
                isQueried: { type: "boolean" },
                queryResult: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            projectComment_id: { type: "string" },
                            projectComment_createdAt: { type: "string", description: "UTC time format" },
                            projectComment_modifiedAt: { type: "string", description: "UTC time format" },
                            projectComment_content: { type: "string" },
                            projectComment_pinned: { type: "boolean" },
                            projectComment_projectId: { type: "string" },
                            projectComment_parentId: { type: "string" },
                            projectComment_userId: { type: "string" },
                            user_id: { type: "string" },
                            user_firstName: { type: "string" },
                            user_lastName: { type: "string" },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no project for the received project ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you are not member of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "project UUID" }),
    (0, swagger_1.ApiQuery)({ name: "q", type: "string", required: false }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Query)("q")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllComments", null);
__decorate([
    (0, common_1.Patch)("/comment/update/content/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Update content of the comment",
        description: "Update content of the comment specified by the comment ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Returns nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no comment for the received comment ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you didn't write the comment, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "comment UUID" }),
    (0, swagger_1.ApiBody)({
        description: "content of the comment to update",
        schema: {
            type: "object",
            properties: {
                content: { type: "string" },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)("content", not_empty_string_validation_pipe_1.NotEmptyStringValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateCommentContent", null);
__decorate([
    (0, common_1.Patch)("/comment/update/fixed/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Switch whether the comment pinned or not",
        description: "Switch whether the comment specified by the comment ID pinned or not.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Returns changed pinned status.",
        schema: {
            type: "object",
            properties: {
                pinnedStatus: { type: "boolean" },
            },
        },
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no comment for the received comment ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you are not ADMIN of the project, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "comment UUID" }),
    (0, swagger_1.ApiBody)({
        description: "content of the comment to update",
        schema: {
            type: "object",
            properties: {
                pinned: { type: "boolean" },
            },
        },
    }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)("pinned", common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, Boolean]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateCommentPinStatus", null);
__decorate([
    (0, common_1.Get)("/docs/:projectId"),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getAllDocs", null);
__decorate([
    (0, common_1.Post)("/docs/create/:projectId"),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createDocument", null);
__decorate([
    (0, common_1.Patch)("/docs/update/title/:projectId"),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, update_doc_title_dto_1.UpdateDocTitleDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateDocTitle", null);
__decorate([
    (0, common_1.Patch)("/docs/update/content/:projectId"),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, update_doc_content_dto_1.UpdateDocContentDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateDocContent", null);
__decorate([
    (0, common_1.Delete)("/docs/delete/:projectId/:docId"),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("projectId", common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Param)("docId", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String, String]),
    __metadata("design:returntype", void 0)
], ProjectController.prototype, "deleteDocument", null);
__decorate([
    (0, common_1.Delete)("/comment/delete/:id"),
    (0, swagger_1.ApiOperation)({
        summary: "Delete the comment",
        description: "Delete the comment specified by the comment ID.",
    }),
    (0, swagger_1.ApiOkResponse)({
        description: "Returns nothing.",
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: "If there is no comment for the received comment ID, return the Not Found error.",
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: "If you didn't write the comment, return the Unauthorized error.",
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "If the comment you want to delete is pinned, return a Bad Request error because it cannot be deleted.",
    }),
    (0, swagger_1.ApiParam)({ name: "id", type: "string", description: "comment UUID" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "deleteComment", null);
ProjectController = __decorate([
    (0, common_1.Controller)("project"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiTags)("Project API"),
    (0, swagger_1.ApiBearerAuth)("access-token"),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map