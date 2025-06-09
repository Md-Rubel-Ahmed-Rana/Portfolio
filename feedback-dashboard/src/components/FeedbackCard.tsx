import { IFeedback } from "@/types";
import FeedbackActions from "./FeedbackActions";

type Props = {
  feedback: IFeedback;
};

const FeedbackCard = ({ feedback }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-3 border border-gray-200">
      <div>
        <p className="text-lg font-semibold text-gray-800">{feedback.name}</p>
        <p className="text-sm text-gray-500">{feedback.designation}</p>
      </div>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Email:</span> {feedback.email}
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-medium">Status:</span> {feedback.status}
      </p>
      <p className="text-gray-700">{feedback.feedback}</p>
      <div className="text-xs text-gray-400">
        <p>Created at: {new Date(feedback.createdAt).toLocaleString()}</p>
        <p>Updated at: {new Date(feedback.updatedAt).toLocaleString()}</p>
      </div>
      <FeedbackActions feedback={feedback} />
    </div>
  );
};

export default FeedbackCard;
