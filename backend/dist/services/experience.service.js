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
exports.ExperienceService = void 0;
const experience_model_1 = require("../models/experience.model");
class Service {
    addExperience(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield experience_model_1.Experience.create(data);
        });
    }
    getAllExperiences() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_model_1.Experience.find({}).sort({ createdAt: -1 });
            return data;
        });
    }
    getSingleExperience(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield experience_model_1.Experience.findById(id);
            return data;
        });
    }
    updateExperience(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield experience_model_1.Experience.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteExperience(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield experience_model_1.Experience.findByIdAndDelete(id);
        });
    }
}
exports.ExperienceService = new Service();
