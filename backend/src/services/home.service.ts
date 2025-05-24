import { Types } from "mongoose";
import { IHome } from "../interfaces/home.interface";
import { Home } from "../models/home.model";
import ApiError from "../shared/apiError";
import { SupabaseService } from "./supabase.service";

class Service {
  async initiateHome(data: IHome) {
    await Home.create(data);
  }

  async updateHome(id: Types.ObjectId, content: Partial<IHome>) {
    await Home.findByIdAndUpdate(id, { $set: { ...content } });
  }

  async updateSocialLinks(id: Types.ObjectId, content: Partial<IHome>) {
    await Home.findByIdAndUpdate(id, { $set: { ...content } });
  }

  async updateLogo(id: Types.ObjectId, url: string) {
    const isExist = await Home.findById(id);
    if (!isExist) {
      throw new ApiError(404, "Home was not found!");
    }
    if (isExist?.logo !== url) {
      SupabaseService.deleteFiles([isExist?.logo]);
    }
    await Home.findByIdAndUpdate(id, { $set: { logo: url } });
  }

  async updateBannerImage(id: Types.ObjectId, url: string) {
    const isExist = await Home.findById(id);
    if (!isExist) {
      throw new ApiError(404, "Home was not found!");
    }
    if (isExist?.bannerImage !== url) {
      SupabaseService.deleteFiles([isExist?.logo]);
    }
    await Home.findByIdAndUpdate(id, { $set: { bannerImage: url } });
  }

  async getHome() {
    const data = await Home.find({}).sort({ createdAt: -1 });
    return data[0];
  }
}

export const HomeService = new Service();
