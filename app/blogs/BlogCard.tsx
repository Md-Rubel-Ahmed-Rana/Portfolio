/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IBlog } from "../types/blog.type";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import blogDateFormatter from "../utils/blogDateFormatter";
import extractSectionTitleAndMakeUrl from "../utils/extractSectionTitleAndMakeUrl";

type Props = {
  blog: IBlog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Link
      href={`/blogs/${blog.id}?title=${blog.title
        .split(" ")
        .join("-")}&s=${extractSectionTitleAndMakeUrl(blog.body)}`}
      key={blog?.id}
    >
      <div className="rounded-md bg-gray-100 shadow-md border p-3 flex flex-col gap-2 group">
        <div className="overflow-hidden rounded-md w-full h-48">
          <img
            className="rounded-md w-full h-full object-fill  transition duration-700 group-hover:scale-110"
            src={
              blog?.thumbnail || "https://i.ibb.co/ZdZ1R7V/image-Not-Found.png"
            }
            alt={blog?.title}
          />
        </div>
        <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-blue-600">
          {blog?.title}
        </h5>
        <div className="flex items-center justify-between text-blue-500">
          <p>
            <button className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full">
              # {blog.type.toUpperCase()}
            </button>
          </p>
          <div className="flex items-center gap-2 text-sm">
            <p>
              <FaCalendarAlt />
            </p>
            <p>{blogDateFormatter(blog.createdAt).short}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
