"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTrack = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const trackingSchema = new mongoose_1.Schema({
    visitorId: { type: String },
    path: { type: String },
    timestamp: { type: Date, default: new Date() },
    ip: { type: String },
    location: {
        city: { type: String },
        region: { type: String },
        country: { type: String },
        postal: { type: String },
        latitude: { type: Number },
        longitude: { type: Number },
    },
    userAgent: { type: String },
}, schemaOptions_1.default);
exports.UserTrack = (0, mongoose_1.model)("UserTrack", trackingSchema);
