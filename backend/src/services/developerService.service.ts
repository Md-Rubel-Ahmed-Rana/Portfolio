import { IService } from "../interfaces/service.interface";
import { Service as ServiceModel } from "../models/service.model";
import { SupabaseService } from "./supabase.service";

class Service {
  async addService(data: IService) {
    await ServiceModel.create(data);
  }

  async getAllServices() {
    const data = await ServiceModel.find({}).sort({ createdAt: -1 });
    return data;
  }

  async getSingleService(id: string) {
    const data = await ServiceModel.findById(id);
    return data;
  }

  async editService(id: string, data: IService) {
    console.log({ service: data });
    const isExist = await ServiceModel.findById(id);
    if (data?.image && data?.image !== isExist?.image) {
      console.log("New image uploaded and old one deleted");
      await SupabaseService.deleteFiles([isExist?.image as string]);
    } else {
      console.log("New image was not uploaded");
    }
    await ServiceModel.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteService(id: string) {
    const isExist = await ServiceModel.findById(id);
    if (isExist?.image) {
      await SupabaseService.deleteFiles([isExist?.image as string]);
    }
    await ServiceModel.findByIdAndDelete(id);
  }
}

export const DeveloperService = new Service();
