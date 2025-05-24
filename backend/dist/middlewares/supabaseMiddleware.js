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
exports.SupabaseMiddleware = void 0;
const supabase_service_1 = require("../services/supabase.service");
class Supabase {
    uploadSingleFile(folderName, fieldName) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const file = req.file;
                if (!file) {
                    console.log("File wasn't provided");
                    next();
                    return;
                }
                console.log("Got file, uploading...");
                const imageUrl = yield supabase_service_1.SupabaseService.uploadSingleFile(folderName, file);
                req.body[fieldName] = imageUrl;
                next();
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to upload image",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    uploadProjectImages() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const folderName = "projects";
            try {
                const files = req.files;
                const thumbnail = files === null || files === void 0 ? void 0 : files.thumbnail[0];
                const screenshots = files === null || files === void 0 ? void 0 : files.screenshots;
                if (thumbnail) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile(folderName, thumbnail);
                    req.body.thumbnail = url;
                }
                if ((screenshots === null || screenshots === void 0 ? void 0 : screenshots.length) > 0) {
                    const urls = yield supabase_service_1.SupabaseService.uploadMultipleFiles(folderName, screenshots);
                    req.body.screenshots = urls;
                }
                this.parseBodyFields(req.body, [
                    "features",
                    "techStack",
                    "projectLength",
                    "tags",
                ]);
                next();
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to upload project images",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    updateProjectImages() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const folderName = "projects";
                const files = req.files;
                const thumbnail = files === null || files === void 0 ? void 0 : files.find((file) => (file === null || file === void 0 ? void 0 : file.fieldname) === "thumbnail");
                if (this.isMulterFile(thumbnail)) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile(folderName, thumbnail);
                    req.body.thumbnail = url;
                }
                const screenshots = files === null || files === void 0 ? void 0 : files.filter((file) => (file === null || file === void 0 ? void 0 : file.fieldname) === "screenshots");
                const screenshotsFiles = screenshots.filter((screenshot) => this.isMulterFile(screenshot));
                let unchangedScreenshots = req.body.screenshots;
                if (unchangedScreenshots && !Array.isArray(unchangedScreenshots)) {
                    unchangedScreenshots = [unchangedScreenshots];
                }
                console.log({
                    thumbnail,
                    screenshots,
                    unchangedScreenshots,
                    screenshotsFiles,
                });
                if ((screenshotsFiles === null || screenshotsFiles === void 0 ? void 0 : screenshotsFiles.length) > 0) {
                    const newUrls = yield supabase_service_1.SupabaseService.uploadMultipleFiles(folderName, screenshotsFiles);
                    req.body.screenshots = [...unchangedScreenshots, ...newUrls];
                }
                this.parseBodyFields(req.body, [
                    "features",
                    "techStack",
                    "projectLength",
                    "tags",
                ]);
                next();
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to update project images",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    uploadBlogImages() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const folderName = "blogs";
                const files = req.files;
                const thumbnail = files.find((file) => file.fieldname === "thumbnail");
                if (this.isMulterFile(thumbnail)) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile(folderName, thumbnail);
                    req.body.thumbnail = url;
                }
                const imageFiles = files.filter((file) => file.fieldname !== "thumbnail");
                const sections = req.body.body;
                sections.forEach((section) => {
                    section.images = [];
                });
                for (const file of imageFiles) {
                    const match = file.fieldname.match(/^body\[(\d+)]\[images]/);
                    if (match) {
                        const sectionIndex = parseInt(match[1]);
                        if (!isNaN(sectionIndex) && sections[sectionIndex]) {
                            sections[sectionIndex].images.push(file);
                        }
                    }
                }
                for (const section of sections) {
                    const multerImages = section.images.filter((img) => this.isMulterFile(img));
                    if (multerImages.length > 0) {
                        const uploadedUrls = yield supabase_service_1.SupabaseService.uploadMultipleFiles(folderName, multerImages);
                        section.images = uploadedUrls;
                    }
                }
                this.parseBodyFields(req.body, ["tags"]);
                req.body.body = sections;
                next();
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to upload blog images",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    updateBlogImages() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const folderName = "blogs";
                const files = req.files;
                const thumbnail = files.find((file) => file.fieldname === "thumbnail");
                if (thumbnail && this.isMulterFile(thumbnail)) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile(folderName, thumbnail);
                    req.body.thumbnail = url;
                }
                const imageFiles = files.filter((file) => file.fieldname !== "thumbnail");
                let sections = req.body.body;
                if (typeof sections === "string") {
                    sections = JSON.parse(sections);
                }
                sections = sections.map((section) => {
                    var _a;
                    return Object.assign(Object.assign({}, section), { images: (_a = section.images) !== null && _a !== void 0 ? _a : [], _uploadImages: [] });
                });
                for (const file of imageFiles) {
                    const match = file.fieldname.match(/^body\[(\d+)]\[images]/);
                    if (match) {
                        const sectionIndex = parseInt(match[1]);
                        if (!isNaN(sectionIndex) && sections[sectionIndex]) {
                            sections[sectionIndex]._uploadImages.push(file);
                        }
                    }
                }
                for (const section of sections) {
                    const existingImages = section.images.filter((img) => typeof img === "string");
                    const newImages = section._uploadImages.filter((img) => this.isMulterFile(img));
                    console.log({ existingImages, newImages });
                    if (newImages.length > 0) {
                        const uploadedUrls = yield supabase_service_1.SupabaseService.uploadMultipleFiles(folderName, newImages);
                        section.images = [...existingImages, ...uploadedUrls];
                    }
                    else {
                        section.images = existingImages;
                    }
                    delete section._uploadImages;
                }
                this.parseBodyFields(req.body, ["tags"]);
                req.body.body = sections;
                next();
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to update blog images",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    updateWebsiteLogoImage() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const logoFile = req === null || req === void 0 ? void 0 : req.file;
                if (logoFile) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile("personal", logoFile);
                    req.body.url = url;
                    next();
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: "Logo image was not found!",
                        statusCode: 404,
                        data: null,
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to update logo image",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    updateWebsiteBannerImage() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const logoFile = req === null || req === void 0 ? void 0 : req.file;
                if (logoFile) {
                    const url = yield supabase_service_1.SupabaseService.uploadSingleFile("personal", logoFile);
                    req.body.url = url;
                    next();
                }
                else {
                    res.status(404).json({
                        success: false,
                        message: "Banner image was not found!",
                        statusCode: 404,
                        data: null,
                    });
                }
            }
            catch (error) {
                res.status(500).json({
                    success: false,
                    message: "Failed to update Banner image",
                    statusCode: 500,
                    error: error,
                });
            }
        });
    }
    isMulterFile(file) {
        return typeof file === "object" && file !== null && "buffer" in file;
    }
    parseBodyFields(body, fields) {
        for (const field of fields) {
            if ((body === null || body === void 0 ? void 0 : body[field]) && typeof body[field] === "string") {
                try {
                    body[field] = JSON.parse(body[field]);
                }
                catch (error) {
                    console.warn(`Failed to parse body field '${field}':`, error);
                }
            }
        }
    }
}
exports.SupabaseMiddleware = new Supabase();
