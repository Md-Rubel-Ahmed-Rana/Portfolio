import { Types } from "mongoose";
import { IUserTrack } from "../interfaces/track.interface";
import { UserTrack } from "../models/userTrack.model";

class Service {
  async newUserTrack(data: IUserTrack) {
    await UserTrack.create(data);
  }

  async getAllUserTracks() {
    return await UserTrack.find({});
  }

  async getByVisitorId(visitorId: string) {
    return await UserTrack.find({ visitorId });
  }

  async getById(id: Types.ObjectId) {
    return await UserTrack.findById(id);
  }

  async update(id: Types.ObjectId, updatedData: Partial<IUserTrack>) {
    return await UserTrack.findByIdAndUpdate(
      id,
      { ...updatedData },
      { new: true }
    );
  }

  async remove(id: Types.ObjectId) {
    return await UserTrack.findByIdAndDelete(id);
  }
}

export const UserTrackService = new Service();
