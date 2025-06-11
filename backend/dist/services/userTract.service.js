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
exports.UserTrackService = void 0;
const userTrack_model_1 = require("../models/userTrack.model");
class Service {
    newUserTrack(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield userTrack_model_1.UserTrack.create(data);
        });
    }
    getAllUserTracks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userTrack_model_1.UserTrack.find({});
        });
    }
    getByVisitorId(visitorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userTrack_model_1.UserTrack.find({ visitorId });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userTrack_model_1.UserTrack.findById(id);
        });
    }
    update(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userTrack_model_1.UserTrack.findByIdAndUpdate(id, Object.assign({}, updatedData), { new: true });
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userTrack_model_1.UserTrack.findByIdAndDelete(id);
        });
    }
}
exports.UserTrackService = new Service();
