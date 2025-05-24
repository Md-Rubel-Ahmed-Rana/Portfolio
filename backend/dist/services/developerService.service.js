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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperService = void 0;
const service_model_1 = require("../models/service.model");
const supabase_service_1 = require("./supabase.service");
class Service {
    addService(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield service_model_1.Service.create(data);
        });
    }
    getAllServices() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield service_model_1.Service.find({});
            return data;
        });
    }
    getSingleService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield service_model_1.Service.findById(id);
            return data;
        });
    }
    editService(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ service: data });
            const isExist = yield service_model_1.Service.findById(id);
            if ((data === null || data === void 0 ? void 0 : data.image) && (data === null || data === void 0 ? void 0 : data.image) !== (isExist === null || isExist === void 0 ? void 0 : isExist.image)) {
                console.log("New image uploaded and old one deleted");
                yield supabase_service_1.SupabaseService.deleteFiles([isExist === null || isExist === void 0 ? void 0 : isExist.image]);
            }
            else {
                console.log("New image was not uploaded");
            }
            yield service_model_1.Service.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteService(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield service_model_1.Service.findById(id);
            if (isExist === null || isExist === void 0 ? void 0 : isExist.image) {
                yield supabase_service_1.SupabaseService.deleteFiles([isExist === null || isExist === void 0 ? void 0 : isExist.image]);
            }
            yield service_model_1.Service.findByIdAndDelete(id);
        });
    }
}
exports.DeveloperService = new Service();
