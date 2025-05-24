import { Schema, model } from "mongoose";
import { IService } from "../interfaces/service.interface";
import schemaOptions from "../utils/schemaOptions";

const serviceSchema = new Schema<IService>(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const Service = model<IService>("Service", serviceSchema);
