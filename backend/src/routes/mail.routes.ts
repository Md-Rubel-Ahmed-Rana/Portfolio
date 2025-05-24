import { Router } from "express";
import { MailController } from "../controllers/mail.controller";

const router = Router();

router.post("/send", MailController.send);

export const MailRoutes = router;
