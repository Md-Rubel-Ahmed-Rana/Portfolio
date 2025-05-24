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
exports.HomeService = void 0;
const home_model_1 = require("../models/home.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const supabase_service_1 = require("./supabase.service");
class Service {
    initiateHome(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield home_model_1.Home.create(data);
        });
    }
    updateHome(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield home_model_1.Home.findByIdAndUpdate(id, { $set: Object.assign({}, content) });
        });
    }
    updateSocialLinks(id, content) {
        return __awaiter(this, void 0, void 0, function* () {
            yield home_model_1.Home.findByIdAndUpdate(id, { $set: Object.assign({}, content) });
        });
    }
    updateLogo(id, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield home_model_1.Home.findById(id);
            if (!isExist) {
                throw new apiError_1.default(404, "Home was not found!");
            }
            if ((isExist === null || isExist === void 0 ? void 0 : isExist.logo) !== url) {
                supabase_service_1.SupabaseService.deleteFiles([isExist === null || isExist === void 0 ? void 0 : isExist.logo]);
            }
            yield home_model_1.Home.findByIdAndUpdate(id, { $set: { logo: url } });
        });
    }
    updateBannerImage(id, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield home_model_1.Home.findById(id);
            if (!isExist) {
                throw new apiError_1.default(404, "Home was not found!");
            }
            if ((isExist === null || isExist === void 0 ? void 0 : isExist.bannerImage) !== url) {
                supabase_service_1.SupabaseService.deleteFiles([isExist === null || isExist === void 0 ? void 0 : isExist.logo]);
            }
            yield home_model_1.Home.findByIdAndUpdate(id, { $set: { bannerImage: url } });
        });
    }
    getHome() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield home_model_1.Home.find({}).sort({ createdAt: -1 });
            return data[0];
        });
    }
}
exports.HomeService = new Service();
