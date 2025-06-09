import { IFeedback } from "@/types";
import { FiTrash2 } from "react-icons/fi";
import FeedbackEditModal from "./FeedbackEditModal";

type Props = {
  feedback: IFeedback;
};

const FeedbackActions = ({ feedback }: Props) => {
  return (
    <div className="flex gap-3">
      <FeedbackEditModal feedback={feedback} />
      <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700 transition cursor-pointer">
        <FiTrash2 />
        Delete
      </button>
    </div>
  );
};

export default FeedbackActions;
