"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const commentSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    comment: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        refPath: "postType",
    },
    postType: {
        type: String,
        required: true,
        enum: ["Project", "Blog"],
    },
}, schemaOptions_1.default);
exports.Comment = (0, mongoose_1.model)("Comment", commentSchema);
