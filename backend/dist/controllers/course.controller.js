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
exports.CourseController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const course_service_1 = require("../services/course.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addCourse = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield course_service_1.CourseService.addCourse(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Course added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllCourses = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield course_service_1.CourseService.getAllCourses();
            this.apiResponse(res, {
                success: true,
                message: "Courses fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleCourse = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield course_service_1.CourseService.getSingleCourse(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Course fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.editCourse = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield course_service_1.CourseService.editCourse(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Course updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteCourse = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield course_service_1.CourseService.deleteCourse(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Course deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.CourseController = new Controller();
