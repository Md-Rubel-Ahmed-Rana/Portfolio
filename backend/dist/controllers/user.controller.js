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
exports.UserController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = require("../services/user.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.getAllUsers = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.getAllUsers();
            this.apiResponse(res, {
                success: true,
                message: "Users found successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.getSingleUser(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "User found successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.updateUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield user_service_1.UserService.updateUser(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "User updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.verifyUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.verifyUser(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "User verified successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.unVerifyUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.unVerifyUser(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "User unverified successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.suspendUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.suspendUser(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "User suspended successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.unSuspendUser = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield user_service_1.UserService.unSuspendUser(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "User unsuspended successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.resetPassword = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.body.id;
            const newPassword = req.body.password;
            yield user_service_1.UserService.resetPassword(userId, newPassword);
            this.apiResponse(res, {
                statusCode: 200,
                success: true,
                message: "Password has been reset successfully",
                data: null,
            });
        }));
    }
}
exports.UserController = new Controller();
