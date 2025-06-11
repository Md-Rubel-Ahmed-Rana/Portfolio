import httpStatus from "http-status";
import axios from "axios";
import { UserTrackService } from "../services/userTract.service";
import RootController from "../shared/rootController";
import { envConfig } from "../config/envConfig";
import { Types } from "mongoose";

class Controller extends RootController {
  newUserTrack = this.catchAsync(async (req, res) => {
    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
      req.socket.remoteAddress;
    const userAgent = req.headers["user-agent"];

    const { data } = await axios.get(
      `https://api.ipapi.com/${ip}?access_key=${envConfig.ip.accessKey}&format=1`
    );

    console.log(data);

    await UserTrackService.newUserTrack({
      ...req.body,
      ip,
      location: {
        city: data.city,
        region: data.region,
        country: data.country_name,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
      },
      userAgent,
    });

    this.apiResponse(res, {
      success: true,
      message: "User info saved",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  });

  getAllUserTracks = this.catchAsync(async (req, res) => {
    const data = await UserTrackService.getAllUserTracks();
    this.apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All user tracks retrieved",
      data,
    });
  });

  getByVisitorId = this.catchAsync(async (req, res) => {
    const data = await UserTrackService.getByVisitorId(req.params.visitorId);
    this.apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "All user tracks by visitor id retrieved",
      data,
    });
  });

  getById = this.catchAsync(async (req, res) => {
    const data = await UserTrackService.getById(
      req.params.id as unknown as Types.ObjectId
    );
    this.apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Track retrieved successfully",
      data,
    });
  });

  update = this.catchAsync(async (req, res) => {
    const data = await UserTrackService.update(
      req.params.id as unknown as Types.ObjectId,
      req.body
    );
    this.apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Track updated successfully",
      data,
    });
  });

  remove = this.catchAsync(async (req, res) => {
    const data = await UserTrackService.remove(
      req.params.id as unknown as Types.ObjectId
    );
    this.apiResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Track deleted successfully",
      data,
    });
  });
}

export const UserTrackController = new Controller();
