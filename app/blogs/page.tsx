/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Metadata } from "next";
import { getBlogsData } from "../apis/blog.api";
import BlogCard from "./BlogCard";

export const metadata: Metadata = {
  title: "Blogs: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const Blogs = async () => {
  const blogs = await getBlogsData();
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-10 flex flex-col gap-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5">
          {blogs.map((blog) => (
            <BlogCard key={blog?.id} blog={blog} />
          ))}
        </div>
        {blogs.length <= 0 && (
          <div className="h-screen flex justify-center items-center">
            <h3 className="text-4xl font-bold text-center text-yellow-400">
              There is no blog found
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
