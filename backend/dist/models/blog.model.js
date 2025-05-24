"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const articleSectionSchema = new mongoose_1.Schema({
    title: {
        type: String,
    },
    images: [
        {
            type: String,
        },
    ],
    description: {
        type: String,
    },
}, schemaOptions_1.default);
const blogSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    type: {
        type: String,
    },
    tags: [String],
    body: [articleSectionSchema],
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment",
            default: [],
        },
    ],
}, schemaOptions_1.default);
exports.Blog = (0, mongoose_1.model)("Blog", blogSchema);
