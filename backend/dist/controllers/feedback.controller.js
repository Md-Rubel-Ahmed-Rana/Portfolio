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
exports.FeedbackController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const feedback_service_1 = require("../services/feedback.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addFeedback = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.status) {
                return this.apiResponse(res, {
                    success: false,
                    message: "You are not authorized to approve feedback",
                    statusCode: http_status_1.default.UNAUTHORIZED,
                    data: null,
                });
            }
            yield feedback_service_1.FeedbackService.addFeedback(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Feedback added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllFeedbacks = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_service_1.FeedbackService.getAllFeedbacks();
            this.apiResponse(res, {
                success: true,
                message: "Feedbacks fetched",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getAllFeedbacksForAdmin = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const filter = (_a = req.query) === null || _a === void 0 ? void 0 : _a.filter;
            const data = yield feedback_service_1.FeedbackService.getAllFeedbacksForAdmin(filter);
            this.apiResponse(res, {
                success: true,
                message: "Feedbacks fetched for admin",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleFeedback = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_service_1.FeedbackService.getSingleFeedback(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Feedback fetched",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.updateFeedback = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_service_1.FeedbackService.updateFeedback(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Feedback updated",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.deleteFeedback = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield feedback_service_1.FeedbackService.deleteFeedback(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Feedback deleted",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
    }
}
exports.FeedbackController = new Controller();
