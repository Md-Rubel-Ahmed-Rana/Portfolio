import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { JwtInstance } from "../shared/jwt";

const router = Router();

router.post("/register", AuthController.registerUser);

router.post("/login", AuthController.loginUser);

router.get("/", JwtInstance.verifyToken as any, AuthController.auth);

router.delete("/logout", AuthController.logout);

router.post("/forget-password", AuthController.forgetPassword);

router.get(
  "/verify-reset-password-token",
  JwtInstance.verifyResetPasswordToken as any,
  AuthController.verifyResetPasswordToken
);

export const AuthRoutes = router;
