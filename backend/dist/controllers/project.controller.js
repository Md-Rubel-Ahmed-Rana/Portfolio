"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const project_service_1 = require("../services/project.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addProject = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield project_service_1.ProjectService.addProject(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Project added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllProjects = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield project_service_1.ProjectService.getAllProjects();
            this.apiResponse(res, {
                success: true,
                message: "Projects fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleProject = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield project_service_1.ProjectService.getSingleProject(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Project fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.editProject = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield project_service_1.ProjectService.editProject(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Project updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteProject = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield project_service_1.ProjectService.deleteProject(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Project deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.ProjectController = new Controller();
