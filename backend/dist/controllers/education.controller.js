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
            yield education_service_1.EducationService.addEducation(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Education added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllEducations = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield education_service_1.EducationService.getAllEducations();
            this.apiResponse(res, {
                success: true,
                message: "Educations fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield education_service_1.EducationService.getSingleEducation(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Education fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.editEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield education_service_1.EducationService.editEducation(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Education updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteEducation = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield education_service_1.EducationService.deleteEducation(req.params.id);
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
