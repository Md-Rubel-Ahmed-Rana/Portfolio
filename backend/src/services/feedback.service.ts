import { envConfig } from "../config/envConfig";
import { IFeedback } from "../interfaces/feedback.interface";
import { Feedback } from "../models/feedback.model";
import ApiError from "../shared/apiError";
import { JwtInstance } from "../shared/jwt";
import { MailServices } from "./mail.service";

class Service {
  async addFeedback(data: IFeedback) {
    await Feedback.create(data);
    await MailServices.feedbackMail(
      data?.name,
      data?.designation,
      data.email,
      data?.feedback
    );
  }

  async getAllFeedbacks() {
    const data = await Feedback.find({ status: "approved" })
      .select({
        status: 0,
      })
      .sort({ createdAt: -1 });
    return data?.length >= 2 ? data : [];
  }

  async getFeedbacksByOwner(email: string) {
    return await Feedback.find({ email }).sort({ createdAt: -1 });
  }

  async getAllFeedbacksForAdmin(filter: string = "all") {
    if (filter === "all") {
      return await Feedback.find({}).sort({ createdAt: -1 });
    } else {
      return await Feedback.find({ status: filter }).sort({ createdAt: -1 });
    }
  }

  async getSingleFeedback(id: string) {
    const data = await Feedback.findById(id);
    return data;
  }

  async updateFeedback(id: string, data: IFeedback) {
    await Feedback.findByIdAndUpdate(id, { $set: { ...data } });
  }

  async deleteFeedback(id: string) {
    await Feedback.findByIdAndDelete(id);
  }

  async sendFeedbackRequestMail(email: string) {
    const isExist = await Feedback.findOne({ email });

    if (!isExist) {
      throw new ApiError(404, "You don't have any feedbacks");
    }

    const token = await JwtInstance.generateFeedbackToken(email);

    const formattedName = isExist.name.toLowerCase().replace(/\s+/g, "");

    const url = `${envConfig.origins[3]}/${formattedName}/${isExist?.email}/${token}`;

    return await MailServices.sendFeedbackDashboardMail(
      isExist?.name,
      isExist?.email,
      url
    );
  }
}

export const FeedbackService = new Service();
