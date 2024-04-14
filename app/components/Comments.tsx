import React from "react";
import { comments } from "../constants/comments";
import { FaUserCircle } from "react-icons/fa";

const Comments = () => {
  return (
    <div className="flex flex-col gap-3">
      {comments.map((comment) => (
        <div className="bg-white p-2 rounded-md" key={Math.random()}>
          <div className="flex items-center gap-3">
            <FaUserCircle className="text-4xl " />
            <div className="flex flex-col gap-0">
              <h6 className="text-lg font-semibold text-gray-700">
                {comment.userName}
              </h6>
              <p className="text-sm text-gray-600">
                At {comment.createdAt.slice(0, 10)}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <p>{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
