"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const root_routes_1 = require("./routes/root.routes");
const errorHandler_1 = __importDefault(require("./shared/errorHandler"));
const envConfig_1 = require("./config/envConfig");
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: envConfig_1.envConfig.origins,
    credentials: true,
}));
// health check endpoint
app.get("/", (req, res) => {
    res.status(http_status_1.default.OK).json({
        message: "Portfolio server is working fine!",
        statusCode: http_status_1.default.OK,
    });
});
// app routes
app.use("/api/v2", root_routes_1.RootRoute);
// not found endpoint
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        message: "The requested route was not found!",
        statusCode: http_status_1.default.NOT_FOUND,
    });
});
// global error handler
app.use(errorHandler_1.default.globalErrorHandler);
exports.default = app;
