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
exports.CommentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const comment_service_1 = require("../services/comment.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addComment = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield comment_service_1.CommentService.addComment(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Comment added successfully",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllComments = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const filter = (_a = req.query) === null || _a === void 0 ? void 0 : _a.filter;
            const data = yield comment_service_1.CommentService.getAllComments(filter);
            this.apiResponse(res, {
                success: true,
                message: "Comments fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getCommentsForSpecificPost = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield comment_service_1.CommentService.getCommentsForSpecificPost(req.params.postId);
            this.apiResponse(res, {
                success: true,
                message: "Comments fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleComment = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield comment_service_1.CommentService.getSingleComment(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Comment fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.updateComment = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield comment_service_1.CommentService.updateComment(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Comment updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteComment = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield comment_service_1.CommentService.deleteComment(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Comment deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.CommentController = new Controller();
