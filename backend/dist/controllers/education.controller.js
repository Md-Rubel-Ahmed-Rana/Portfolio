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
exports.EducationController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const education_service_1 = require("../services/education.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield education_service_1.EducationService.addEducation(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Education added successfully",
                statusCode: http_status_1.default.CREATED,
                data: result,
            });
        }));
        this.getAllEducations = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield education_service_1.EducationService.getAllEducations();
            this.apiResponse(res, {
                success: true,
                message: "Educations retrieved successfully",
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
        this.getEducationById = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield education_service_1.EducationService.getEducationById(id);
            if (!result) {
                return this.apiResponse(res, {
                    success: false,
                    message: "Education not found",
                    statusCode: http_status_1.default.NOT_FOUND,
                    data: null,
                });
            }
            this.apiResponse(res, {
                success: true,
                message: "Education retrieved successfully",
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
        this.updateEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield education_service_1.EducationService.updateEducation(id, req.body);
            if (!result) {
                return this.apiResponse(res, {
                    success: false,
                    message: "Education not found",
                    statusCode: http_status_1.default.NOT_FOUND,
                    data: null,
                });
            }
            this.apiResponse(res, {
                success: true,
                message: "Education updated successfully",
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
        this.deleteEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield education_service_1.EducationService.deleteEducation(id);
            if (!result) {
                return this.apiResponse(res, {
                    success: false,
                    message: "Education not found",
                    statusCode: http_status_1.default.NOT_FOUND,
                    data: null,
                });
            }
            this.apiResponse(res, {
                success: true,
                message: "Education deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.EducationController = new Controller();
