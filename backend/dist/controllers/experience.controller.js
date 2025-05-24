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
exports.ExperienceController = void 0;
const experience_service_1 = require("../services/experience.service");
const http_status_1 = __importDefault(require("http-status"));
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addExperience = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield experience_service_1.ExperienceService.addExperience(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Experience added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllExperiences = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_service_1.ExperienceService.getAllExperiences();
            this.apiResponse(res, {
                success: true,
                message: "Experiences fetched",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleExperience = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_service_1.ExperienceService.getSingleExperience(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Experience fetched",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.updateExperience = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_service_1.ExperienceService.updateExperience(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Experience updated",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.deleteExperience = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_service_1.ExperienceService.deleteExperience(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Experience deleted",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
    }
}
exports.ExperienceController = new Controller();
