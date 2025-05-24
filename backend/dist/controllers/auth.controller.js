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
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const auth_service_1 = require("../services/auth.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
const cookies_1 = require("../shared/cookies");
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.registerUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield auth_service_1.AuthService.registerUser(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Registered successfully",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.loginUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const { accessToken, refreshToken } = yield auth_service_1.AuthService.loginUser(email, password);
            cookies_1.cookieManager.setTokens(res, accessToken, refreshToken);
            this.apiResponse(res, {
                success: true,
                message: "Login successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.auth = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id;
            const user = yield auth_service_1.AuthService.auth(userId);
            this.apiResponse(res, {
                success: true,
                message: "Authenticated user",
                statusCode: http_status_1.default.OK,
                data: user,
            });
        }));
        this.logout = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            cookies_1.cookieManager.clearTokens(res);
            this.apiResponse(res, {
                statusCode: 200,
                success: true,
                message: "Logout successful",
                data: null,
            });
        }));
        this.forgetPassword = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const email = req.body.email;
            yield auth_service_1.AuthService.forgetPassword(email);
            this.apiResponse(res, {
                statusCode: 200,
                success: true,
                message: "A password reset link has been sent to your email. Please check your inbox or spam folder and follow the instructions to reset your password.",
                data: null,
            });
        }));
        this.verifyResetPasswordToken = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            this.apiResponse(res, {
                statusCode: 200,
                success: true,
                message: "Proceed to reset your password",
                data: null,
            });
        }));
    }
}
exports.AuthController = new Controller();
