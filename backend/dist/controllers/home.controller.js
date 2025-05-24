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
exports.HomeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const home_service_1 = require("../services/home.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.initiateHome = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield home_service_1.HomeService.initiateHome(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Util initiated",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.updateHome = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield home_service_1.HomeService.updateHome(id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Home data updated",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.updateSocialLinks = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield home_service_1.HomeService.updateSocialLinks(id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Social links added",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.updateLogo = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield home_service_1.HomeService.updateLogo(id, req.body.url);
            this.apiResponse(res, {
                success: true,
                message: "Website logo updated successfully!",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.updateBannerImage = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield home_service_1.HomeService.updateBannerImage(id, req.body.url);
            this.apiResponse(res, {
                success: true,
                message: "Website banner image updated successfully!",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.getHome = this.catchAsync((_req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield home_service_1.HomeService.getHome();
            this.apiResponse(res, {
                success: true,
                message: "Util data fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
    }
}
exports.HomeController = new Controller();
