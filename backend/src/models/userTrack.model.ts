import { model, Schema } from "mongoose";
import { IUserTrack } from "../interfaces/track.interface";
import schemaOptions from "../utils/schemaOptions";

const trackingSchema = new Schema<IUserTrack>(
  {
    visitorId: { type: String },
    path: { type: String },
    ip: { type: String },
    location: { type: String },
    locationCoordinates: {
      latitude: { type: Number },
      longitude: { type: Number },
    },
    userAgent: { type: String },
  },
  schemaOptions
);

export const UserTrack = model<IUserTrack>("UserTrack", trackingSchema);
