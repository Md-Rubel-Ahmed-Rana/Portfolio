import { rootApi } from "./rootApi";

export const getCommentsData = async (postId: string) => {
  try {
    const res = await fetch(`${rootApi}/comment/by-post/${postId}`, {
      next: {
        revalidate: 10,
      },
    });
    if (res.ok) {
      const result = await res.json();
      const comments = result.data as IComment[];
      return comments;
    }
  } catch (error) {
    // Handle error
    console.error("Error posting comment:", error);
    throw new Error("Failed to post comment. Please try again later.");
  }
};
