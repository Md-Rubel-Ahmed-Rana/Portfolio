import { fetchFromApi, postToApi } from ".";
import { IFeedback } from "../types/feedback.type";

export const getFeedbackData = async () => {
  return ((await fetchFromApi("feedback")) as IFeedback[]) || [];
};

export const postNewFeedback = async (feedback: IFeedback) => {
  return await postToApi(`feedback`, feedback);
};
