import { decode } from "base64-arraybuffer";
import { supabase } from "../config/supabase";
import ApiError from "../shared/apiError";
import { envConfig } from "../config/envConfig";

const bucket = envConfig.supabase.bucket;
const baseUrl = envConfig.supabase.bucketBaseUrl;

class Service {
  async uploadSingleFile(
    folderName: string,
    file: Express.Multer.File
  ): Promise<string> {
    const fileBase64 = decode(file.buffer.toString("base64"));
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(
        `/${folderName}/Md-Rubel-Ahmed-Rana-${Date.now()}-${file.originalname}`,
        fileBase64,
        {
          upsert: false,
          contentType: "image/png",
        }
      );

    if (error) {
      throw new ApiError(500, error?.message);
    }
    const { data: image } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return image.publicUrl;
  }
  async uploadMultipleFiles(
    folderName: string,
    files: Express.Multer.File[]
  ): Promise<string[]> {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const url = await this.uploadSingleFile(folderName, file);
      uploadedUrls.push(url);
    }

    return uploadedUrls;
  }
  async deleteFiles(fileUrls: string[]): Promise<void> {
    try {
      const urls = fileUrls.map(this.extractStoragePath);
      const { data, error } = await supabase.storage.from(bucket).remove(urls);
      if (error) {
        console.log({
          message: "Failed to delete files",
          error,
        });
        return;
      }
      console.log({
        message: "Files deleted successfully",
        data,
      });
    } catch (error: any) {
      throw new ApiError(500, error?.message);
    }
  }
  private extractStoragePath(fullUrl: string): string {
    if (fullUrl.startsWith(baseUrl)) {
      return fullUrl.slice(baseUrl.length);
    }
    throw new Error("Invalid Supabase URL format.");
  }
}

export const SupabaseService = new Service();
