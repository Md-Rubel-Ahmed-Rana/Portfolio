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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
const course_model_1 = require("../models/course.model");
class Service {
    addCourse(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.create(data);
        });
    }
    getAllCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.find({}).sort({ createdAt: -1 });
        });
    }
    getSingleCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findById(id);
        });
    }
    editCourse(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield course_model_1.Course.findByIdAndDelete(id);
        });
    }
}
exports.CourseService = new Service();
