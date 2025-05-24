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
exports.ServiceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const developerService_service_1 = require("../services/developerService.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addService = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield developerService_service_1.DeveloperService.addService(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Service added",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllServices = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield developerService_service_1.DeveloperService.getAllServices();
            this.apiResponse(res, {
                success: true,
                message: "Services fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleService = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield developerService_service_1.DeveloperService.getSingleService(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Service fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.editService = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield developerService_service_1.DeveloperService.editService(req.params.id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Service updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteService = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield developerService_service_1.DeveloperService.deleteService(req.params.id);
            this.apiResponse(res, {
                success: true,
                message: "Service deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.ServiceController = new Controller();
