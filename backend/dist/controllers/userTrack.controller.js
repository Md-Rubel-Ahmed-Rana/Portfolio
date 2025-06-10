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
exports.UserTrackController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const axios_1 = __importDefault(require("axios"));
const userTract_service_1 = require("../services/userTract.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
const request_ip_1 = __importDefault(require("request-ip"));
const envConfig_1 = require("../config/envConfig");
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.newUserTrack = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log(req.ip, req.socket.remoteAddress, request_ip_1.default.getClientIp(req));
            const ip = ((_a = req.headers["x-forwarded-for"]) === null || _a === void 0 ? void 0 : _a.split(",")[0]) ||
                req.socket.remoteAddress;
            const userAgent = req.headers["user-agent"];
            const { data } = yield axios_1.default.get(`https://api.ipapi.com/${ip}?access_key=${envConfig_1.envConfig.ip.accessKey}&format=1`);
            console.log(data);
            yield userTract_service_1.UserTrackService.newUserTrack(Object.assign(Object.assign({}, req.body), { ip, location: {
                    city: data.city,
                    region: data.region,
                    country: data.country_name,
                    postal: data.postal,
                    latitude: data.latitude,
                    longitude: data.longitude,
                }, userAgent }));
            this.apiResponse(res, {
                success: true,
                message: "User info saved",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
    }
}
exports.UserTrackController = new Controller();
