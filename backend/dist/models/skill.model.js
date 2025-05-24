"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skill = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const SkillSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    serial: { type: Number, required: true, unique: true },
}, schemaOptions_1.default);
exports.Skill = (0, mongoose_1.model)("Skill", SkillSchema);
