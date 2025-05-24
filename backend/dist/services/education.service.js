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
exports.EducationService = void 0;
const education_model_1 = require("../models/education.model");
class Service {
    addEducation(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield education_model_1.Education.create(data);
        });
    }
    getAllEducations() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield education_model_1.Education.find({});
            return data;
        });
    }
    getSingleEducation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield education_model_1.Education.findById(id);
            return data;
        });
    }
    editEducation(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield education_model_1.Education.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteEducation(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield education_model_1.Education.findByIdAndDelete(id);
        });
    }
}
exports.EducationService = new Service();
