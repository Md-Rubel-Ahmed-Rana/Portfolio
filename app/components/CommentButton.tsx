"use client";
import React, { useState } from "react";
import CommentModal from "./CommentModal";

const CommentButton = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleComment = () => {
    setIsOpen(() => true);
  };
  return (
    <>
      <button
        onClick={handleComment}
        type="button"
        className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-5 py-1 rounded-full"
      >
        Leave a comment
      </button>
      {isOpen && <CommentModal isOpen={isOpen} id={id} setIsOpen={setIsOpen} />}
    </>
  );
};

export default CommentButton;
