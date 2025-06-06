import { IFeedback } from "../interfaces/feedback.interface";
import { Feedback } from "../models/feedback.model";
import { MailServices } from "./mail.service";

class Service {
  async addFeedback(data: IFeedback) {
    await Feedback.create(data);
    await MailServices.feedbackMail(
      data?.name,
      data?.designation,
      data?.company,
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
}

export const FeedbackService = new Service();
