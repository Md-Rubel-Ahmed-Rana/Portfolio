import { IUserTrack } from "../interfaces/track.interface";
import { UserTrack } from "../models/userTrack.model";

class Service {
  async newUserTrack(data: IUserTrack) {
    await UserTrack.create(data);
  }
}

export const UserTrackService = new Service();
