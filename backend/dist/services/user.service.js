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
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const bcrypt_1 = require("../shared/bcrypt");
class Service {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_model_1.User.find({}).select("-password -__v");
            return users;
        });
    }
    getSingleUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findById(id).select("-password -__v");
            return user;
        });
    }
    userByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({ email });
            if (!user) {
                throw new apiError_1.default(404, "User not found!");
            }
            return user;
        });
    }
    updateUser(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.findByIdAndUpdate(id, { $set: Object.assign({}, updatedData) });
        });
    }
    verifyUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.findByIdAndUpdate(id, { $set: { isVerified: true } });
        });
    }
    unVerifyUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.findByIdAndUpdate(id, { $set: { isVerified: false } });
        });
    }
    suspendUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.findByIdAndUpdate(id, { $set: { suspend: true } });
        });
    }
    unSuspendUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.User.findByIdAndUpdate(id, { $set: { suspend: false } });
        });
    }
    resetPassword(userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield user_model_1.User.findById(userId);
            if (!isExist) {
                throw new apiError_1.default(404, "User was not found!");
            }
            else {
                const newHashedPassword = yield bcrypt_1.BcryptInstance.hash(newPassword);
                yield user_model_1.User.findByIdAndUpdate(userId, {
                    $set: { password: newHashedPassword },
                });
            }
        });
    }
}
exports.UserService = new Service();
