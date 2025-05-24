"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
    },
};
exports.default = schemaOptions;
