"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const projectSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    screenshots: [String],
    description: {
        type: String,
        required: true,
    },
    features: [String],
    techStack: [String],
    sourceCode: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
    },
    projectLength: {
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
        },
    },
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Comment",
            default: [],
        },
    ],
    projectStatus: {
        type: String,
        required: true,
    },
}, schemaOptions_1.default);
exports.Project = (0, mongoose_1.model)("Project", projectSchema);
