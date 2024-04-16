export const getCommentsData = async (postId: string) => {
  try {
    const res = await fetch(
      `https://portfolio-backend-v2-p89h.onrender.com/api/v2/comment/by-post/${postId}`
    );
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
