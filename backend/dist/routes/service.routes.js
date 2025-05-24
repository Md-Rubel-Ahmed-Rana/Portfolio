"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const service_controller_1 = require("../controllers/service.controller");
const multer_1 = __importDefault(require("../config/multer"));
const supabaseMiddleware_1 = require("../middlewares/supabaseMiddleware");
const router = (0, express_1.Router)();
router.post("/add-new-service", multer_1.default.single("image"), supabaseMiddleware_1.SupabaseMiddleware.uploadSingleFile("services", "image"), service_controller_1.ServiceController.addService);
router.get("/", service_controller_1.ServiceController.getAllServices);
router.get("/single/:id", service_controller_1.ServiceController.getSingleService);
router.patch("/update/:id", multer_1.default.single("image"), supabaseMiddleware_1.SupabaseMiddleware.uploadSingleFile("services", "image"), service_controller_1.ServiceController.editService);
router.delete("/delete/:id", service_controller_1.ServiceController.deleteService);
exports.ServiceRoutes = router;
