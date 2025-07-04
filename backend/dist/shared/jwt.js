"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtInstance = void 0;
const jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
const cookies_1 = require("../shared/cookies");
const envConfig_1 = require("../config/envConfig");
const user_service_1 = require("../services/user.service");
class JWT {
    constructor() {
        this.signToken = (payload_1, secret_1, ...args_1) => __awaiter(this, [payload_1, secret_1, ...args_1], void 0, function* (payload, secret, expiresIn = "7d") {
            return jsonwebtoken_1.default.sign(payload, secret, {
                expiresIn: "30d",
            });
        });
        this.generateAccessToken = (payload) => __awaiter(this, void 0, void 0, function* () {
            return this.signToken(payload, envConfig_1.envConfig.jwt.accessTokenSecret, envConfig_1.envConfig.jwt.accessTokenExpire);
        });
        this.generateRefreshToken = (payload) => __awaiter(this, void 0, void 0, function* () {
            return this.signToken(payload, envConfig_1.envConfig.jwt.refreshTokenSecret, envConfig_1.envConfig.jwt.refreshTokenExpire);
        });
        this.verifyToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const accessTokenWithBearer = (_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.mdRubelAhmedRanaAccessToken;
            const refreshTokenWithBearer = (_b = req === null || req === void 0 ? void 0 : req.cookies) === null || _b === void 0 ? void 0 : _b.mdRubelAhmedRanaRefreshToken;
            const accessToken = accessTokenWithBearer === null || accessTokenWithBearer === void 0 ? void 0 : accessTokenWithBearer.split(" ")[1];
            const refreshToken = refreshTokenWithBearer === null || refreshTokenWithBearer === void 0 ? void 0 : refreshTokenWithBearer.split(" ")[1];
            if (!accessToken || !refreshToken) {
                return res.status(401).json({
                    statusCode: 401,
                    success: false,
                    message: "You are not authenticated. Please login!",
                    data: null,
                });
            }
            try {
                const user = jsonwebtoken_1.default.verify(accessToken, envConfig_1.envConfig.jwt.accessTokenSecret);
                req.user = user;
                return next();
            }
            catch (error) {
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    return this.handleExpiredAccessToken(refreshToken, res, next);
                }
                return res.status(401).json({
                    statusCode: 401,
                    success: false,
                    message: "You are not authenticated.",
                    data: null,
                });
            }
        });
        this.handleExpiredAccessToken = (refreshToken, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const decoded = jsonwebtoken_1.default.verify(refreshToken, envConfig_1.envConfig.jwt.refreshTokenSecret);
                const payload = { id: decoded.id, email: decoded.email };
                const newAccessToken = yield this.generateAccessToken(payload);
                const newRefreshToken = yield this.generateRefreshToken(payload);
                cookies_1.cookieManager.setTokens(res, newAccessToken, newRefreshToken);
                const user = yield user_service_1.UserService.getSingleUser(payload.id);
                return res.status(200).json({
                    statusCode: 200,
                    success: true,
                    message: "Tokens rotated",
                    data: user,
                });
            }
            catch (error) {
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    return this.logoutUser(res);
                }
                return res.status(401).json({
                    statusCode: 401,
                    success: false,
                    message: "You are not authenticated. Please log in again.",
                    data: null,
                });
            }
        });
        this.logoutUser = (res) => {
            cookies_1.cookieManager.clearTokens(res);
            return res.status(200).json({
                statusCode: 200,
                success: true,
                message: "You have logged out",
                data: null,
            });
        };
        this.verifyResetPasswordToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const resetToken = req === null || req === void 0 ? void 0 : req.query.token;
            if (!resetToken) {
                return res.status(400).json({
                    statusCode: 400,
                    success: false,
                    message: "Reset token is required.",
                });
            }
            try {
                const decoded = jsonwebtoken_1.default.verify(resetToken, envConfig_1.envConfig.jwt.accessTokenSecret);
                if (Date.now() >= decoded.exp * 1000) {
                    return res.status(401).json({
                        statusCode: 401,
                        success: false,
                        message: "The reset link has expired. Please request a new password reset link.",
                    });
                }
                req.user = decoded;
                next();
            }
            catch (error) {
                if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                    return res.status(401).json({
                        statusCode: 401,
                        success: false,
                        message: "The reset link has expired. Please request a new password reset link.",
                    });
                }
                return res.status(400).json({
                    statusCode: 400,
                    success: false,
                    message: "Invalid reset token.",
                });
            }
        });
        this.verifyFeedbackToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.query.token;
                if (!token) {
                    return res.status(400).json({ message: "Token is required" });
                }
                const decoded = jsonwebtoken_1.default.verify(token, envConfig_1.envConfig.jwt.accessTokenSecret);
                req.body.email = decoded.email;
                next();
            }
            catch (err) {
                return res.status(401).json({ message: "Invalid or expired token" });
            }
        });
    }
    getExpiredDate(date) {
        return String(date);
    }
    generatePasswordResetToken(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.signToken({ id, email }, envConfig_1.envConfig.jwt.accessTokenSecret, "10m");
            return token;
        });
    }
    generateFeedbackToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield jsonwebtoken_1.default.sign({ email }, envConfig_1.envConfig.jwt.accessTokenSecret, {
                expiresIn: "24h",
            });
        });
    }
}
exports.JwtInstance = new JWT();
