"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reconnectDb = exports.disconnectDb = exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const colorCode_1 = require("../utils/colorCode");
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${colorCode_1.colors.green}🔗 Connecting to the database...${colorCode_1.colors.reset}`);
    try {
        yield mongoose_1.default.connect(process.env.DATABASE_URL, {
            socketTimeoutMS: 1000,
        });
        console.log(`${colorCode_1.colors.green}🎉 Database connection successful!${colorCode_1.colors.reset}`);
    }
    catch (error) {
        console.error(`${colorCode_1.colors.red}❌ There was an error connecting to the database: ${error.message}${colorCode_1.colors.reset}`);
    }
});
exports.connectDb = connectDb;
const disconnectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.disconnect();
        console.log(`${colorCode_1.colors.blue}🔌 Disconnected from database.${colorCode_1.colors.reset}`);
    }
    catch (error) {
        console.error(`${colorCode_1.colors.red}❌ Error disconnecting from the database: ${error.message}${colorCode_1.colors.reset}`);
    }
});
exports.disconnectDb = disconnectDb;
const reconnectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.disconnect();
        yield mongoose_1.default.connect(process.env.DATABASE_URL);
        console.log(`${colorCode_1.colors.yellow}🔄 Reconnected to database.${colorCode_1.colors.reset}`);
    }
    catch (error) {
        console.error(`${colorCode_1.colors.red}❌ Error reconnecting to the database: ${error.message}${colorCode_1.colors.reset}`);
    }
});
exports.reconnectDb = reconnectDb;
