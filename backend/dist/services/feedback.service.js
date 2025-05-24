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
exports.FeedbackService = void 0;
const feedback_model_1 = require("../models/feedback.model");
class Service {
    addFeedback(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedback_model_1.Feedback.create(data);
        });
    }
    getAllFeedbacks() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_model_1.Feedback.find({ status: "approved" }).select({
                status: 0,
            });
            return (data === null || data === void 0 ? void 0 : data.length) >= 2 ? data : [];
        });
    }
    getAllFeedbacksForAdmin() {
        return __awaiter(this, arguments, void 0, function* (filter = "all") {
            if (filter) {
                if (filter === "all") {
                    return yield feedback_model_1.Feedback.find({});
                }
                else {
                    return yield feedback_model_1.Feedback.find({ status: filter });
                }
            }
            else {
                return yield feedback_model_1.Feedback.find({});
            }
        });
    }
    getSingleFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_model_1.Feedback.findById(id);
            return data;
        });
    }
    updateFeedback(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedback_model_1.Feedback.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteFeedback(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedback_model_1.Feedback.findByIdAndDelete(id);
        });
    }
}
exports.FeedbackService = new Service();
