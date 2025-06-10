import { model, Schema } from "mongoose";
import { IUserTrack } from "../interfaces/track.interface";
import schemaOptions from "../utils/schemaOptions";

const trackingSchema = new Schema<IUserTrack>(
  {
    visitorId: { type: String },
    path: { type: String },
    timestamp: { type: Date, default: new Date() },
    ip: { type: String },
    location: {
      city: { type: String },
      region: { type: String },
      country: { type: String },
      postal: { type: String },
      latitude: { type: Number },
      longitude: { type: Number },
    },
    userAgent: { type: String },
  },
  schemaOptions
);

export const UserTrack = model<IUserTrack>("UserTrack", trackingSchema);
