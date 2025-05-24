import { fetchFromApi, postToApi } from ".";
import { IComment } from "../types/comment.type";
import { IPostComment } from "../types/postComment.type";

export const getCommentsData = async (postId: string) => {
  return (
    ((await fetchFromApi(`comment/by-post/${postId}`)) as IComment[]) || []
  );
};

export const postComment = async (comment: IPostComment) => {
  return await postToApi(`comment/add`, comment);
};
