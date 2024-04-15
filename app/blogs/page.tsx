/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogData } from "../apis/getBlogData";
import { IBlog } from "../types/blog.type";
import blogDateFormatter from "../utils/blogDateFormatter";

export const metadata: Metadata = {
  title: "Blogs: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const Blogs = async () => {
  const blogs = (await getBlogData()) as IBlog[];
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-10 flex flex-col gap-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5">
          {blogs.map((blog) => (
            <Link
              href={`/blogs/${blog.id}?&t=${blog.title
                .split(" ")
                .join("-")}&c=${blog.body}`}
              key={blog?.id}
            >
              <div className="rounded-md bg-gray-100 shadow-md border p-3 flex flex-col gap-2 group">
                <div className="overflow-hidden rounded-md w-full h-48">
                  <img
                    className="rounded-md w-full h-full object-fill  transition duration-700 group-hover:scale-110"
                    src={
                      blog?.image ||
                      "https://i.ibb.co/ZdZ1R7V/image-Not-Found.png"
                    }
                    alt={blog?.title}
                  />
                </div>
                <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-blue-600">
                  {blog?.title}
                </h5>
                <div className="flex items-center justify-between text-blue-500">
                  <div className="flex items-center gap-2 text-sm">
                    <p>
                      <FaCalendarAlt />
                    </p>
                    <p>{blogDateFormatter(blog.createdAt).short}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p>
                      <FaComments />
                    </p>
                    <p>Comments ({blog.comments})</p>
                  </div>
                </div>
                <p>
                  <button className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full">
                    # {blog.type.toUpperCase()}
                  </button>
                </p>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: `${blog?.body?.slice(0, 110)} ...`,
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
        {blogs.length <= 0 && (
          <div className="h-screen flex justify-center items-center">
            <h3 className="text-4xl font-bold text-center text-yellow-400">
              There is no blog found
            </h3>
          </div>
        )}
        {/* <div className="text-center text-4xl font-semibold">
          Pagination here
        </div> */}
      </div>
    </section>
  );
};

export default Blogs;
