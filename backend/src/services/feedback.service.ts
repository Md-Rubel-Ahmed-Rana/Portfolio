import { IFeedback } from "../interfaces/feedback.interface";
import { Feedback } from "../models/feedback.model";

class Service {
  async addFeedback(data: IFeedback) {
    await Feedback.create(data);
  }

  async getAllFeedbacks() {
    const data = await Feedback.find({ status: "approved" }).select({
      status: 0,
    });
    return data?.length >= 2 ? data : [];
  }

  async getAllFeedbacksForAdmin(filter: string = "all") {
    if (filter) {
      if (filter === "all") {
        return await Feedback.find({});
      } else {
        return await Feedback.find({ status: filter });
      }
    } else {
      return await Feedback.find({});
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
