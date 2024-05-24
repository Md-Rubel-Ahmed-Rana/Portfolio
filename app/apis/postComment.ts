import { IPostComment } from "../types/postComment.type";
import { rootApi } from "./rootApi";

export const postComment = async (comment: IPostComment) => {
  try {
    // const formData = new FormData();
    // formData.append("image", comment.image);
    // remove the image from body object for a few time
    delete comment.image;

    const res = await fetch(`${rootApi}/comment/add`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(comment),
    });
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
