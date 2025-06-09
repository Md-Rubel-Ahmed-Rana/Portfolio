import { IFeedback } from "@/types";
import FeedbackEditModal from "./FeedbackEditModal";
import FeedbackDeleteModal from "./FeedbackDeleteModal";

type Props = {
  feedback: IFeedback;
};

const FeedbackActions = ({ feedback }: Props) => {
  return (
    <div className="flex gap-3">
      <FeedbackEditModal feedback={feedback} />
      <FeedbackDeleteModal feedback={feedback} />
    </div>
  );
};

export default FeedbackActions;
