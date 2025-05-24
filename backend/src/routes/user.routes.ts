import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/", UserController.getAllUsers);

router.get("/single/:id", UserController.getSingleUser);

router.patch("/update/:id", UserController.updateUser);

router.patch("/verify/:id", UserController.verifyUser);

router.patch("/unverify/:id", UserController.unVerifyUser);

router.patch("/suspend/:id", UserController.suspendUser);

router.patch("/unsuspend/:id", UserController.unSuspendUser);

router.post("/reset-password", UserController.resetPassword);

export const UserRoutes = router;
