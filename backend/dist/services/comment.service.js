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
exports.CommentService = void 0;
const comment_model_1 = require("../models/comment.model");
class Service {
    addComment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield comment_model_1.Comment.create(data);
        });
    }
    getAllComments(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const filters = filter ? { post: filter } : {};
            const data = yield comment_model_1.Comment.find(filters).populate({
                path: "post",
                select: {
                    name: 1,
                    title: 1,
                },
            });
            return data;
        });
    }
    getCommentsForSpecificPost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield comment_model_1.Comment.find({ post: postId });
            return data;
        });
    }
    getSingleComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield comment_model_1.Comment.findById(id);
            return data;
        });
    }
    updateComment(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield comment_model_1.Comment.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield comment_model_1.Comment.findByIdAndDelete(id);
        });
    }
}
exports.CommentService = new Service();
