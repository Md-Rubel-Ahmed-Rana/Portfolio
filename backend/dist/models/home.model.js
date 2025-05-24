"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const mongoose_1 = require("mongoose");
const schemaOptions_1 = __importDefault(require("../utils/schemaOptions"));
const homeSchema = new mongoose_1.Schema({
    logo: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        default: "",
    },
    phoneNumber: {
        type: String,
        default: "",
    },
    address: {
        type: String,
        default: "",
    },
    addressMapLocation: {
        type: String,
        default: "",
    },
    name: {
        type: String,
        default: "",
    },
    position: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    resumeLink: {
        type: String,
        default: "",
    },
    bannerImage: {
        type: String,
        default: "",
    },
    socialLinks: [
        {
            name: {
                type: String,
                default: "",
            },
            link: {
                type: String,
                default: "",
            },
            icon: {
                type: String,
                default: "",
            },
        },
    ],
}, schemaOptions_1.default);
exports.Home = (0, mongoose_1.model)("Home", homeSchema);
