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
exports.SupabaseService = void 0;
const base64_arraybuffer_1 = require("base64-arraybuffer");
const supabase_1 = require("../config/supabase");
const apiError_1 = __importDefault(require("../shared/apiError"));
const envConfig_1 = require("../config/envConfig");
const bucket = envConfig_1.envConfig.supabase.bucket;
const baseUrl = envConfig_1.envConfig.supabase.bucketBaseUrl;
class Service {
    uploadSingleFile(folderName, file) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileBase64 = (0, base64_arraybuffer_1.decode)(file.buffer.toString("base64"));
            const { data, error } = yield supabase_1.supabase.storage
                .from(bucket)
                .upload(`/${folderName}/Md-Rubel-Ahmed-Rana-${Date.now()}-${file.originalname}`, fileBase64, {
                upsert: false,
                contentType: "image/png",
            });
            if (error) {
                throw new apiError_1.default(500, error === null || error === void 0 ? void 0 : error.message);
            }
            const { data: image } = supabase_1.supabase.storage
                .from(bucket)
                .getPublicUrl(data.path);
            return image.publicUrl;
        });
    }
    uploadMultipleFiles(folderName, files) {
        return __awaiter(this, void 0, void 0, function* () {
            const uploadedUrls = [];
            for (const file of files) {
                const url = yield this.uploadSingleFile(folderName, file);
                uploadedUrls.push(url);
            }
            return uploadedUrls;
        });
    }
    deleteFiles(fileUrls) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const urls = fileUrls.map(this.extractStoragePath);
                const { data, error } = yield supabase_1.supabase.storage.from(bucket).remove(urls);
                if (error) {
                    console.log({
                        message: "Failed to delete files",
                        error,
                    });
                    return;
                }
                console.log({
                    message: "Files deleted successfully",
                    data,
                });
            }
            catch (error) {
                throw new apiError_1.default(500, error === null || error === void 0 ? void 0 : error.message);
            }
        });
    }
    extractStoragePath(fullUrl) {
        if (fullUrl.startsWith(baseUrl)) {
            return fullUrl.slice(baseUrl.length);
        }
        throw new Error("Invalid Supabase URL format.");
    }
}
exports.SupabaseService = new Service();
