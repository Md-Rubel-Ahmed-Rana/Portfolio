"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const educationSchema = new mongoose_1.Schema({
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String },
    start_date: { type: String, required: true },
    end_date: { type: String },
    grade: { type: String },
    description: { type: String },
    is_current: { type: Boolean, default: false },
}, schemaOptions_1.default);
exports.Education = (0, mongoose_1.model)("Education", educationSchema);
