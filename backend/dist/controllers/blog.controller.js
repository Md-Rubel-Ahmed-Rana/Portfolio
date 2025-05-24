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
exports.BlogController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const blog_service_1 = require("../services/blog.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.addBlog = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield blog_service_1.BlogService.addBlog(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Blog added successfully",
                statusCode: http_status_1.default.CREATED,
                data: null,
            });
        }));
        this.getAllBlogs = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield blog_service_1.BlogService.getAllBlogs();
            this.apiResponse(res, {
                success: true,
                message: "Blogs fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.getSingleBlog = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = yield blog_service_1.BlogService.getSingleBlog(id);
            this.apiResponse(res, {
                success: true,
                message: "Blog fetched successfully",
                statusCode: http_status_1.default.OK,
                data,
            });
        }));
        this.updateBlog = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield blog_service_1.BlogService.updateBlog(id, req.body);
            this.apiResponse(res, {
                success: true,
                message: "Blog updated successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
        this.deleteBlog = this.catchAsync((req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            yield blog_service_1.BlogService.deleteBlog(id);
            this.apiResponse(res, {
                success: true,
                message: "Blog deleted successfully",
                statusCode: http_status_1.default.OK,
                data: null,
            });
        }));
    }
}
exports.BlogController = new Controller();
