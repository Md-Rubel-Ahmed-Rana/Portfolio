import React from "react";
import { FaUserCircle } from "react-icons/fa";
import moment from "moment";
import { getCommentsData } from "../apis/comment.api";

const Comments = async ({ postId }: { postId: string }) => {
  const comments = (await getCommentsData(postId)) || [];
  return (
    <div className="flex flex-col gap-3">
      {comments?.map((comment) => (
        <div className="bg-white p-2 rounded-md" key={Math.random()}>
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl " />
            <div className="flex flex-col gap-0">
              <h6 className="text-lg font-semibold text-gray-700">
                {comment.name}
              </h6>
              <p className="text-sm text-gray-600">
                {moment(comment.createdAt).fromNow()}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
      {comments.length <= 0 && (
        <div className="bg-white p-2 rounded-md text-gray-600">
          <h5 className="text-xl font-semibold">Nobody has commented yet.</h5>
          <p className="text-sm mt-3">Be first commenter</p>
        </div>
      )}
    </div>
  );
};

export default Comments;
