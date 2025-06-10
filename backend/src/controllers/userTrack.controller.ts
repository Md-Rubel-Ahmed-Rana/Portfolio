import httpStatus from "http-status";
import axios from "axios";
import { UserTrackService } from "../services/userTract.service";
import RootController from "../shared/rootController";
import requestIp from "request-ip";
import { envConfig } from "../config/envConfig";

class Controller extends RootController {
  newUserTrack = this.catchAsync(async (req, res) => {
    console.log(req.ip, req.socket.remoteAddress, requestIp.getClientIp(req));
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
}

export const UserTrackController = new Controller();
