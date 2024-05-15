import { IFeedback } from "../types/feedback.type";

export const getFeedbackData = async () => {
  try {
    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/feedback",
      {
        next: {
          revalidate: 10,
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      const FeedbackData = data?.data as IFeedback[];
      return FeedbackData;
    }
  } catch (error) {
    console.error("Error fetching feedback data:", error);
    throw new Error("Failed to fetch feedbacks. Please try again later.");
  }
};

export const postNewFeedback = async (feedback: IFeedback) => {
  try {
    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/feedback",
      {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(feedback),
      }
    );

    if (res.ok) {
      const result = await res.json();
      return result;
    }
  } catch (error) {
    console.error("Error fetching feedback:", error);
    throw new Error("Failed to post feedback. Please try again later.");
  }
};
