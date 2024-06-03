import { Metadata } from "next";
import PostFeedback from "../components/PostFeedback";

export const metadata: Metadata = {
  title: "Feedback - Post New Feedback",
  description:
    "Post your feedback and help us improve. Your input is valuable to us and will be reviewed by our team.",
};

const PostFeedbackPage = () => {
  return (
    <div>
      <PostFeedback />
    </div>
  );
};

export default PostFeedbackPage;
