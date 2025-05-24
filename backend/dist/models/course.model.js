"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const courseSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    institute: {
        type: String,
        required: true,
    },
    courseDetails: {
        type: [String],
        required: true,
    },
}, schemaOptions_1.default);
exports.Course = (0, mongoose_1.model)("Course", courseSchema);
