/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import Link from "next/link";
import { getBlogData } from "../apis/getBlogData";
import { IBlog } from "../types/blog.type";
import blogDateFormatter from "../utils/blogDateFormatter";

const Blogs = async () => {
  const blogs = (await getBlogData()) as IBlog[];
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] w-full mx-auto py-20 lg:px-10 px-5 flex flex-col gap-10">
        <div>
          <h3 className="font-semibold lg:text-4xl text-2xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Recent blogs
          </h3>
          <p className="text-center text-slate-500 lg:text-xl text-sm font-sans mt-5">
            Crafting compelling blog content that sparks curiosity and fosters
            meaningful <br className="lg:block hidden" /> connections.
            Let&apos;s bring your ideas to life, one post at a time.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {blogs.slice(blogs.length - 3, blogs.length).map((blog) => (
            <Link
              href={`/blogs/${blog.id}?&t=${blog.title
                .split(" ")
                .join("-")}&c=${blog.body}`}
              key={blog.id}
            >
              <div className="relative rounded-lg border shadow-md cursor-pointer overflow-hidden group">
                <img
                  className="transition w-full h-80 duration-1000 group-hover:scale-110"
                  src={
                    blog?.image ||
                    "https://i.ibb.co/ZdZ1R7V/image-Not-Found.png"
                  }
                  alt={blog?.title}
                />
                <p className="absolute top-3 left-3">
                  <button
                    type="button"
                    className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full"
                  >
                    # {blog.type.toUpperCase()}
                  </button>
                </p>
                <div className="flex justify-center items-center">
                  <div className="absolute bottom-3 transition duration-1000 group-hover:bg-purple-800  bg-white w-11/12 mx-auto px-4 py-2 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between group-hover:text-white text-blue-500">
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
                    <div className="mt-3">
                      <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-white">
                        {blog.title.length > 32
                          ? `${blog.title.slice(0, 32)} ...`
                          : blog.title}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blogs">
            <button
              type="button"
              className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-2 rounded-full"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
