"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTrackRoutes = void 0;
const express_1 = require("express");
const userTrack_controller_1 = require("../controllers/userTrack.controller");
const router = (0, express_1.Router)();
router.get("/", userTrack_controller_1.UserTrackController.newUserTrack);
exports.UserTrackRoutes = router;
