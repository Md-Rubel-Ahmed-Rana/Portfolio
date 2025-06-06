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
exports.BlogService = void 0;
const blog_model_1 = require("../models/blog.model");
const apiError_1 = __importDefault(require("../shared/apiError"));
const supabase_service_1 = require("./supabase.service");
const compareArrayValues_1 = __importDefault(require("../utils/compareArrayValues"));
class Service {
    addBlog(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield blog_model_1.Blog.create(data);
        });
    }
    getAllBlogs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_model_1.Blog.find({}).populate("comments").sort({ createdAt: -1 });
        });
    }
    getSingleBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.isBlogExist(id);
            return yield blog_model_1.Blog.findById(id).populate("comments").sort({ createdAt: -1 });
        });
    }
    updateBlog(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield this.isBlogExist(id);
            const oldImages = this.extractBlogImages(isExist);
            const newImages = this.extractBlogImages(data);
            const deletableImages = (0, compareArrayValues_1.default)(oldImages, newImages);
            if ((deletableImages === null || deletableImages === void 0 ? void 0 : deletableImages.length) > 0) {
                supabase_service_1.SupabaseService.deleteFiles(deletableImages);
            }
            yield blog_model_1.Blog.findByIdAndUpdate(id, { $set: Object.assign({}, data) });
        });
    }
    deleteBlog(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield this.isBlogExist(id);
            const deletableImages = this.extractBlogImages(isExist);
            if ((deletableImages === null || deletableImages === void 0 ? void 0 : deletableImages.length) > 0) {
                supabase_service_1.SupabaseService.deleteFiles(deletableImages);
            }
            yield blog_model_1.Blog.findByIdAndDelete(id);
        });
    }
    extractBlogImages(blog) {
        var _a;
        let images = ((blog === null || blog === void 0 ? void 0 : blog.thumbnail) ? [blog === null || blog === void 0 ? void 0 : blog.thumbnail] : []);
        (_a = blog === null || blog === void 0 ? void 0 : blog.body) === null || _a === void 0 ? void 0 : _a.map((section) => {
            images = [...images, ...section === null || section === void 0 ? void 0 : section.images];
        });
        return images;
    }
    isBlogExist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield blog_model_1.Blog.findById(id);
            if (!isExist) {
                throw new apiError_1.default(404, "Blog was not found!");
            }
            return isExist;
        });
    }
}
exports.BlogService = new Service();
