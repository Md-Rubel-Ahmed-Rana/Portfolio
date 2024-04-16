import { IPostComment } from "../types/postComment.type";

export const postComment = async (comment: IPostComment) => {
  try {
    // const formData = new FormData();
    // formData.append("image", comment.image);
    // remove the image from body object for a few time
    delete comment.image;

    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/comment/add",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(comment),
      }
    );
    if (res.ok) {
      const result = await res.json();
      return result;
    }
  } catch (error) {
    // Handle error
    console.error("Error posting comment:", error);
    throw new Error("Failed to post comment. Please try again later.");
  }
};
