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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const colorCode_1 = require("./utils/colorCode");
const port = process.env.PORT;
// Start the server and connect to the database
const server = app_1.default.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${colorCode_1.colors.green}🚀 The portfolio server is running on port: ${port}${colorCode_1.colors.reset}`);
    yield (0, database_1.connectDb)();
}));
// Gracefully handle server shutdown
process.on("SIGINT", () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${colorCode_1.colors.yellow}🛑 Shutting down server...${colorCode_1.colors.reset}`);
    // Disconnect from the database before shutting down the server
    yield (0, database_1.disconnectDb)();
    // Close the server
    server.close(() => {
        console.log(`${colorCode_1.colors.blue}🔒 Server closed.${colorCode_1.colors.reset}`);
        process.exit(0);
    });
}));
// Handle database reconnection if needed
// Example: Reconnect when encountering a database connection error
mongoose_1.default.connection.on("error", () => __awaiter(void 0, void 0, void 0, function* () {
    console.error(`${colorCode_1.colors.red}❌ Database connection error. Reconnecting...${colorCode_1.colors.reset}`);
    yield (0, database_1.reconnectDb)();
}));
