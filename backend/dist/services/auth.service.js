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
exports.AuthService = void 0;
const user_model_1 = require("../models/user.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const user_service_1 = require("./user.service");
const jwt_1 = require("../shared/jwt");
const mail_service_1 = require("./mail.service");
const envConfig_1 = require("../config/envConfig");
const bcrypt_1 = require("../shared/bcrypt");
class Service {
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.BcryptInstance.hash(user.password);
            user.password = hashedPassword;
            yield user_model_1.User.create(user);
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield user_service_1.UserService.userByEmailWithPassword(email);
            if (!isExist) {
                throw new apiError_1.default(400, "User not found");
            }
            const isPassMatched = yield bcrypt_1.BcryptInstance.compare(password, isExist.password);
            if (!isPassMatched) {
                throw new apiError_1.default(400, "Password is incorrect");
            }
            else {
                const payload = {
                    id: isExist === null || isExist === void 0 ? void 0 : isExist.id,
                    email: isExist === null || isExist === void 0 ? void 0 : isExist.email,
                };
                const accessToken = yield jwt_1.JwtInstance.generateAccessToken(payload);
                const refreshToken = yield jwt_1.JwtInstance.generateRefreshToken(payload);
                return {
                    accessToken: `Bearer ${accessToken}`,
                    refreshToken: `Bearer ${refreshToken}`,
                };
            }
        });
    }
    auth(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_service_1.UserService.getSingleUser(id);
        });
    }
    forgetPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.UserService.userByEmailWithPassword(email);
            const token = yield jwt_1.JwtInstance.generatePasswordResetToken(user === null || user === void 0 ? void 0 : user._id, user === null || user === void 0 ? void 0 : user.email);
            const resetUrl = `${envConfig_1.envConfig.origins[2]}/auth/reset-password?id=${user === null || user === void 0 ? void 0 : user._id}&name=${user === null || user === void 0 ? void 0 : user.name}&email=${user === null || user === void 0 ? void 0 : user.email}&token=${token}`;
            yield mail_service_1.MailServices.resetPasswordLink(user === null || user === void 0 ? void 0 : user.email, resetUrl);
        });
    }
}
exports.AuthService = new Service();
