import { Schema, model } from "mongoose";
import { IHome } from "../interfaces/home.interface";
import schemaOptions from "../utils/schemaOptions";

const homeSchema = new Schema<IHome>(
  {
    logo: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    addressMapLocation: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    resumeLink: {
      type: String,
      default: "",
    },
    bannerImage: {
      type: String,
      default: "",
    },
    socialLinks: [
      {
        name: {
          type: String,
          default: "",
        },
        link: {
          type: String,
          default: "",
        },
        icon: {
          type: String,
          default: "",
        },
      },
    ],
  },
  schemaOptions
);

export const Home = model<IHome>("Home", homeSchema);
