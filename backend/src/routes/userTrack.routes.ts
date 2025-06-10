import { Router } from "express";
import { UserTrackController } from "../controllers/userTrack.controller";

const router = Router();

router.get("/", UserTrackController.newUserTrack);

export const UserTrackRoutes = router;
