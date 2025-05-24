"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRoutes = void 0;
const express_1 = require("express");
const mail_controller_1 = require("../controllers/mail.controller");
const router = (0, express_1.Router)();
router.post("/send", mail_controller_1.MailController.send);
exports.MailRoutes = router;
