import React from "react";
import blogImage from "../../public/images/blogImage.jpg";
import Image from "next/image";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import Link from "next/link";
import { blogs } from "../constants/blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const Blogs = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-10 flex flex-col gap-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-5">
          {blogs.map((blog, index) => (
            <Link href={`/blogs/${blog.id}`} key={index}>
              <div className="rounded-md border p-3 flex flex-col gap-2 group">
                <div className="overflow-hidden">
                  <Image
                    className="rounded-md w-full transition duration-700 group-hover:scale-110"
                    src={blogImage}
                    alt={blog.title}
                  />
                </div>
                <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-blue-600">
                  {blog.title}
                </h5>
                <div className="flex items-center justify-between text-blue-500">
                  <div className="flex items-center gap-2 text-sm">
                    <p>
                      <FaCalendarAlt />
                    </p>
                    <p>Oct 01, 2022</p>
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
                <p className="group-hover:text-yellow-600">
                  {blog.body.slice(0, 130)} ...
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center text-4xl font-semibold">
          Pagination here
        </div>
      </div>
    </section>
  );
};

export default Blogs;
