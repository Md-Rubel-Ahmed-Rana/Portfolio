import React from "react";
import blogImage from "../../public/images/blogImage.jpg";
import Image from "next/image";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "The Power of Asynchronous JavaScript",
    type: "tips",
    image: "https://example.com/photo1.png",
    body: "In the world of JavaScript, asynchronous programming plays a crucial role in improving performance and user experience. By leveraging asynchronous functions and callbacks, developers can execute non-blocking code, allowing multiple operations to run concurrently without waiting for each other to finish. This blog explores the fundamentals of asynchronous JavaScript and how it empowers developers to build responsive and efficient web applications.",
    createdAt: new Date(),
    comments: 3,
  },
  {
    id: 2,
    title: "Mastering CSS Flexbox",
    type: "tutorial",
    image: "https://example.com/photo2.png",
    body: "Flexbox is a powerful layout model that enables developers to design flexible and responsive web layouts with ease. From creating complex grid structures to aligning and distributing content, mastering CSS Flexbox opens up a world of possibilities in web design. This blog provides a comprehensive guide to understanding and implementing Flexbox techniques for creating modern and dynamic web layouts.",
    createdAt: new Date(),
    comments: 0,
  },
  {
    id: 3,
    title: "Getting Started with React Hooks",
    type: "tutorial",
    image: "https://example.com/photo3.png",
    body: "React Hooks revolutionized the way developers build React applications by introducing a simpler and more intuitive way to manage state and side effects. With Hooks like useState and useEffect, developers can leverage functional components to write cleaner and more maintainable code. This blog offers a beginner-friendly introduction to React Hooks and demonstrates how to use them to enhance your React projects.",
    createdAt: new Date(),
    comments: 1,
  },
  {
    id: 4,
    title: "Exploring the World of Node.js",
    type: "tutorial",
    image: "https://example.com/photo4.png",
    body: "Node.js has emerged as a popular runtime environment for building scalable and efficient server-side applications. With its event-driven architecture and non-blocking I/O operations, Node.js enables developers to create high-performance web servers and APIs. This blog delves into the core concepts of Node.js and provides insights into its key features and capabilities.",
    createdAt: new Date(),
    comments: 5,
  },
  {
    id: 5,
    title: "The Art of Responsive Web Design",
    type: "tutorial",
    image: "https://example.com/photo5.png",
    body: "Responsive web design is essential for ensuring optimal user experience across various devices and screen sizes. By employing fluid grids, flexible images, and media queries, developers can create websites that adapt seamlessly to desktops, tablets, and smartphones. This blog explores the principles and best practices of responsive web design, equipping developers with the knowledge to create visually stunning and user-friendly websites.",
    createdAt: new Date(),
    comments: 0,
  },
];

const Blogs = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] w-full mx-auto py-20 px-10 flex flex-col gap-10">
        <div>
          <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Recent blogs
          </h3>
          <p className="text-center text-slate-500 text-xl font-sans mt-5">
            Crafting compelling blog content that sparks curiosity and fosters
            meaningful <br /> connections. Let&apos;s bring your ideas to life,
            one post at a time.
          </p>
        </div>
        <div className="flex justify-between items-center ">
          {blogs.slice(0, 3).map((blog, index) => (
            <Link href={`/blogs/${blog.id}`} key={index}>
              <div className="relative rounded-3xl cursor-pointer overflow-hidden group">
                <Image
                  className="transition duration-1000 group-hover:scale-110"
                  src={blogImage}
                  alt={blog.title}
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
                        <p>Oct 01, 2022</p>
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
