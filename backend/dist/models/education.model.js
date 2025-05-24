"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
    className: {
        type: String,
        required: true,
    },
    board: {
        type: String,
        required: true,
    },
    passingYear: {
        type: Number,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
    institute: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
    },
});
exports.Education = (0, mongoose_1.model)("Education", educationSchema);
