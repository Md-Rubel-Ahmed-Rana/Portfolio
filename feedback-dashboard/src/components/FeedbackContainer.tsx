import { IFeedback } from "@/types";
import React from "react";
import FeedbackCard from "./FeedbackCard";

type Props = {
  feedbacks: IFeedback[];
};

const FeedbackContainer = ({ feedbacks = [] }: Props) => {
  if (!feedbacks.length) {
    return (
      <div className="text-center mt-8">
        <p className="text-lg text-gray-600">No feedback found.</p>
        <p className="text-sm text-gray-400">
          Once feedback is submitted, it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 mt-4">
      {feedbacks.map((feedback) => (
        <FeedbackCard feedback={feedback} key={feedback.id} />
      ))}
    </div>
  );
};

export default FeedbackContainer;
