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
exports.SkillController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const rootController_1 = __importDefault(require("../shared/rootController"));
const skill_service_1 = require("../services/skill.service");
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.createSkill = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const skill = yield skill_service_1.SkillService.createSkill(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Skill created successfully",
                statusCode: http_status_1.default.CREATED,
                data: skill,
            });
        }));
        this.getAllSkills = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const skills = yield skill_service_1.SkillService.getAllSkills();
            this.apiResponse(res, {
                success: true,
                message: "Skills fetched successfully",
                statusCode: http_status_1.default.OK,
                data: skills,
            });
        }));
        this.getSkillById = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const skill = yield skill_service_1.SkillService.getSkillById(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Skill fetched successfully",
                statusCode: http_status_1.default.OK,
                data: skill,
            });
        }));
        this.updateSkill = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield skill_service_1.SkillService.updateSkill(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Skill updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteSkill = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield skill_service_1.SkillService.deleteSkill(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Skill deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.SkillController = new Controller();
