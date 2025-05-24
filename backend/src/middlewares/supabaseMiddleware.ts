import { NextFunction, Request, Response } from "express";
import { SupabaseService } from "../services/supabase.service";
import { IArticleSection } from "../interfaces/blog.interface";

class Supabase {
  uploadSingleFile(folderName: string, fieldName: string) {
    return async (
      req: Request & { [key: string]: any },
      res: Response,
      next: NextFunction
    ) => {
      try {
        const file = req.file;
        if (!file) {
          console.log("File wasn't provided");
          next();
          return;
        }
        console.log("Got file, uploading...");
        const imageUrl = await SupabaseService.uploadSingleFile(
          folderName,
          file
        );
        req.body[fieldName] = imageUrl;
        next();
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to upload image",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  uploadProjectImages() {
    return async (
      req: Request & { [key: string]: any },
      res: Response,
      next: NextFunction
    ) => {
      const folderName = "projects";
      try {
        const files = req.files as any;
        const thumbnail = files?.thumbnail[0] as Express.Multer.File;
        const screenshots = files?.screenshots as Express.Multer.File[];

        if (thumbnail) {
          const url = await SupabaseService.uploadSingleFile(
            folderName,
            thumbnail
          );
          req.body.thumbnail = url;
        }

        if (screenshots?.length > 0) {
          const urls = await SupabaseService.uploadMultipleFiles(
            folderName,
            screenshots
          );

          req.body.screenshots = urls;
        }
        this.parseBodyFields(req.body, [
          "features",
          "techStack",
          "projectLength",
          "tags",
        ]);
        next();
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to upload project images",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  updateProjectImages() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const folderName = "projects";
        const files = req.files as any;
        const thumbnail = files?.find(
          (file: Express.Multer.File) => file?.fieldname === "thumbnail"
        ) as Express.Multer.File;

        if (this.isMulterFile(thumbnail)) {
          const url = await SupabaseService.uploadSingleFile(
            folderName,
            thumbnail
          );
          req.body.thumbnail = url;
        }

        const screenshots = files?.filter(
          (file: Express.Multer.File) => file?.fieldname === "screenshots"
        ) as Express.Multer.File[];

        const screenshotsFiles = (screenshots as any[]).filter(
          (screenshot): screenshot is Express.Multer.File =>
            this.isMulterFile(screenshot)
        );

        let unchangedScreenshots = req.body.screenshots;

        if (unchangedScreenshots && !Array.isArray(unchangedScreenshots)) {
          unchangedScreenshots = [unchangedScreenshots];
        }
        console.log({
          thumbnail,
          screenshots,
          unchangedScreenshots,
          screenshotsFiles,
        });

        if (screenshotsFiles?.length > 0) {
          const newUrls = await SupabaseService.uploadMultipleFiles(
            folderName,
            screenshotsFiles
          );
          req.body.screenshots = [...unchangedScreenshots, ...newUrls];
        }

        this.parseBodyFields(req.body, [
          "features",
          "techStack",
          "projectLength",
          "tags",
        ]);
        next();
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update project images",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  uploadBlogImages() {
    return async (
      req: Request & { [key: string]: any },
      res: Response,
      next: NextFunction
    ) => {
      try {
        const folderName = "blogs";
        const files = req.files as any[];

        const thumbnail = files.find(
          (file: any) => file.fieldname === "thumbnail"
        );

        if (this.isMulterFile(thumbnail)) {
          const url = await SupabaseService.uploadSingleFile(
            folderName,
            thumbnail
          );
          req.body.thumbnail = url;
        }

        const imageFiles = files.filter(
          (file: any) => file.fieldname !== "thumbnail"
        );

        const sections = req.body.body as IArticleSection[];

        sections.forEach((section) => {
          section.images = [];
        });

        for (const file of imageFiles) {
          const match = file.fieldname.match(/^body\[(\d+)]\[images]/);
          if (match) {
            const sectionIndex = parseInt(match[1]);
            if (!isNaN(sectionIndex) && sections[sectionIndex]) {
              sections[sectionIndex].images.push(file);
            }
          }
        }

        for (const section of sections) {
          const multerImages = section.images.filter((img) =>
            this.isMulterFile(img)
          );
          if (multerImages.length > 0) {
            const uploadedUrls = await SupabaseService.uploadMultipleFiles(
              folderName,
              multerImages
            );
            section.images = uploadedUrls;
          }
        }
        this.parseBodyFields(req.body, ["tags"]);
        req.body.body = sections;
        next();
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to upload blog images",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  updateBlogImages() {
    return async (
      req: Request & { [key: string]: any },
      res: Response,
      next: NextFunction
    ) => {
      try {
        const folderName = "blogs";
        const files = req.files as any[];

        const thumbnail = files.find(
          (file: any) => file.fieldname === "thumbnail"
        );

        if (thumbnail && this.isMulterFile(thumbnail)) {
          const url = await SupabaseService.uploadSingleFile(
            folderName,
            thumbnail
          );
          req.body.thumbnail = url;
        }

        const imageFiles = files.filter(
          (file: any) => file.fieldname !== "thumbnail"
        );

        let sections = req.body.body;

        if (typeof sections === "string") {
          sections = JSON.parse(sections) as IArticleSection[];
        }

        sections = sections.map((section: IArticleSection) => {
          return {
            ...section,
            images: section.images ?? [],
            _uploadImages: [] as any[],
          };
        });

        for (const file of imageFiles) {
          const match = file.fieldname.match(/^body\[(\d+)]\[images]/);
          if (match) {
            const sectionIndex = parseInt(match[1]);
            if (!isNaN(sectionIndex) && sections[sectionIndex]) {
              sections[sectionIndex]._uploadImages.push(file);
            }
          }
        }

        for (const section of sections) {
          const existingImages = section.images.filter(
            (img: any) => typeof img === "string"
          );
          const newImages = section._uploadImages.filter((img: File | string) =>
            this.isMulterFile(img)
          );

          console.log({ existingImages, newImages });

          if (newImages.length > 0) {
            const uploadedUrls = await SupabaseService.uploadMultipleFiles(
              folderName,
              newImages
            );
            section.images = [...existingImages, ...uploadedUrls];
          } else {
            section.images = existingImages;
          }

          delete section._uploadImages;
        }

        this.parseBodyFields(req.body, ["tags"]);

        req.body.body = sections;
        next();
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update blog images",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  updateWebsiteLogoImage() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const logoFile = req?.file as Express.Multer.File;
        if (logoFile) {
          const url = await SupabaseService.uploadSingleFile(
            "personal",
            logoFile
          );
          req.body.url = url;
          next();
        } else {
          res.status(404).json({
            success: false,
            message: "Logo image was not found!",
            statusCode: 404,
            data: null,
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update logo image",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  updateWebsiteBannerImage() {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const logoFile = req?.file as Express.Multer.File;
        if (logoFile) {
          const url = await SupabaseService.uploadSingleFile(
            "personal",
            logoFile
          );
          req.body.url = url;
          next();
        } else {
          res.status(404).json({
            success: false,
            message: "Banner image was not found!",
            statusCode: 404,
            data: null,
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to update Banner image",
          statusCode: 500,
          error: error,
        });
      }
    };
  }
  isMulterFile(file: any): file is Express.Multer.File {
    return typeof file === "object" && file !== null && "buffer" in file;
  }
  parseBodyFields(body: any, fields: string[]) {
    for (const field of fields) {
      if (body?.[field] && typeof body[field] === "string") {
        try {
          body[field] = JSON.parse(body[field]);
        } catch (error) {
          console.warn(`Failed to parse body field '${field}':`, error);
        }
      }
    }
  }
}

export const SupabaseMiddleware = new Supabase();
