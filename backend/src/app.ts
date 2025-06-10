import express, { Application } from "express";
import cors from "cors";
import httpStatus from "http-status";
import { RootRoute } from "./routes/root.routes";
import errorHandler from "./shared/errorHandler";
import { envConfig } from "./config/envConfig";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app: Application = express();

app.set("trust proxy", true);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: envConfig.origins,
    credentials: true,
  })
);

// health check endpoint
app.get("/", (req, res) => {
  res.status(httpStatus.OK).json({
    message: "Portfolio server is working fine!",
    statusCode: httpStatus.OK,
  });
});

// app routes
app.use("/api/v2", RootRoute);

// not found endpoint
app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: "The requested route was not found!",
    statusCode: httpStatus.NOT_FOUND,
  });
});

// global error handler
app.use(errorHandler.globalErrorHandler);

export default app;
