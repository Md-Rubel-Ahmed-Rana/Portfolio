"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Experience = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const experienceSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    workLocation: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
    },
    website: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    responsibilities: [String],
    learnedNewTech: [String],
}, schemaOptions_1.default);
exports.Experience = (0, mongoose_1.model)("Experience", experienceSchema);
