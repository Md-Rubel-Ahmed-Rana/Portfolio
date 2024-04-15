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
      const FeedbackData = data.data as IFeedback[];
      return FeedbackData;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching project data:", error);
    throw new Error("Failed to fetch project data. Please try again later.");
  }
};
