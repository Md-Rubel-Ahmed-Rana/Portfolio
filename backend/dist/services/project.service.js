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
exports.ProjectService = void 0;
const project_model_1 = require("../models/project.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const compareArrayValues_1 = __importDefault(require("../utils/compareArrayValues"));
const supabase_service_1 = require("./supabase.service");
class Service {
    addProject(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield project_model_1.Project.create(data);
        });
    }
    getAllProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield project_model_1.Project.find({})
                .populate("comments")
                .sort({ createdAt: -1 });
            return data;
        });
    }
    getSingleProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield project_model_1.Project.findById(id).populate("comments");
            return data;
        });
    }
    editProject(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield project_model_1.Project.findById(id);
            if (!isExist) {
                throw new apiError_1.default(404, "Project was not found!");
            }
            if ((isExist === null || isExist === void 0 ? void 0 : isExist.thumbnail) !== (data === null || data === void 0 ? void 0 : data.thumbnail)) {
                supabase_service_1.SupabaseService.deleteFiles([isExist === null || isExist === void 0 ? void 0 : isExist.thumbnail]);
            }
            const isScreenshotsChanged = (0, compareArrayValues_1.default)(isExist === null || isExist === void 0 ? void 0 : isExist.screenshots, data === null || data === void 0 ? void 0 : data.screenshots);
            if ((isScreenshotsChanged === null || isScreenshotsChanged === void 0 ? void 0 : isScreenshotsChanged.length) > 0) {
                supabase_service_1.SupabaseService.deleteFiles(isScreenshotsChanged);
            }
            yield project_model_1.Project.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteProject(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield project_model_1.Project.findById(id);
            if (!isExist) {
                throw new apiError_1.default(404, "Project was not found!");
            }
            supabase_service_1.SupabaseService.deleteFiles([...isExist === null || isExist === void 0 ? void 0 : isExist.screenshots, isExist === null || isExist === void 0 ? void 0 : isExist.thumbnail]);
            yield project_model_1.Project.findByIdAndDelete(id);
        });
    }
}
exports.ProjectService = new Service();
