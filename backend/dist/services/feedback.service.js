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
exports.FeedbackService = void 0;
const envConfig_1 = require("../config/envConfig");
const feedback_model_1 = require("../models/feedback.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const jwt_1 = require("../shared/jwt");
const mail_service_1 = require("./mail.service");
class Service {
    addFeedback(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield feedback_model_1.Feedback.create(data);
            yield mail_service_1.MailServices.feedbackMail(data === null || data === void 0 ? void 0 : data.name, data === null || data === void 0 ? void 0 : data.designation, data.email, data === null || data === void 0 ? void 0 : data.feedback);
        });
    }
    getAllFeedbacks() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_model_1.Feedback.find({ status: "approved" })
                .select({
                status: 0,
            })
                .sort({ createdAt: -1 });
            return (data === null || data === void 0 ? void 0 : data.length) >= 2 ? data : [];
        });
    }
    getFeedbacksByOwner(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield feedback_model_1.Feedback.find({ email }).sort({ createdAt: -1 });
        });
    }
    getAllFeedbacksForAdmin() {
        return __awaiter(this, arguments, void 0, function* (filter = "all") {
            if (filter === "all") {
                return yield feedback_model_1.Feedback.find({}).sort({ createdAt: -1 });
            }
            else {
                return yield feedback_model_1.Feedback.find({ status: filter }).sort({ createdAt: -1 });
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
    sendFeedbackRequestMail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield feedback_model_1.Feedback.findOne({ email });
            if (!isExist) {
                throw new apiError_1.default(404, "You don't have any feedbacks");
            }
            const token = yield jwt_1.JwtInstance.generateFeedbackToken(email);
            const formattedName = isExist.name.toLowerCase().replace(/\s+/g, "");
            const url = `${envConfig_1.envConfig.origins[3]}/${formattedName}/${isExist === null || isExist === void 0 ? void 0 : isExist.email}/${token}`;
            return yield mail_service_1.MailServices.sendFeedbackDashboardMail(isExist === null || isExist === void 0 ? void 0 : isExist.name, isExist === null || isExist === void 0 ? void 0 : isExist.email, url);
        });
    }
}
exports.FeedbackService = new Service();
