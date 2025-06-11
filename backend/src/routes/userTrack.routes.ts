import { Router } from "express";
import { UserTrackController } from "../controllers/userTrack.controller";

const router = Router();

router.post("/", UserTrackController.newUserTrack);

router.get("/", UserTrackController.getAllUserTracks);

router.get("/by-visitor/:visitorId", UserTrackController.getAllUserTracks);

router.get("/single/:id", UserTrackController.getById);

router.patch("/update/:id", UserTrackController.update);

router.delete("/delete/:id", UserTrackController.remove);

export const UserTrackRoutes = router;
