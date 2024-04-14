import { blogs } from "@/app/constants/blogs";
import blogImage from "../../../public/images/blogImage.jpg";
import Image from "next/image";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import CommentButton from "@/app/components/CommentButton";
import Comments from "@/app/components/Comments";
import { IBlog } from "@/app/types/blog.type";

const BlogDetails = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find(
    (blg: IBlog) => blg.id === Number(params.id)
  ) as IBlog;

  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-5 flex gap-20">
        <div className="w-3/5 rounded-md border p-3 flex flex-col gap-2 group">
          <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-blue-600">
            {blog?.title}
          </h5>
          <div className="flex items-center gap-10 text-gray-600 text-sm font-sans">
            <p className="flex items-center gap-2">
              <FaUserCircle />
              <span>By Md Rubel Ahmed Rana</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Posted on</span>
              <FaCalendarAlt />
              <span>{new Date(blog?.createdAt).toString().slice(0, 15)}</span>
            </p>
          </div>
          <p>
            <button className="bg-gradient-to-l text-sm from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full">
              # {blog?.type.toUpperCase()}
            </button>
          </p>
          <div className="overflow-hidden my-5">
            <Image
              className="rounded-md w-full h-80 transition duration-700 hover:scale-110"
              src={blogImage}
              alt={blog?.title || "Blog image"}
            />
          </div>
          <div
            className="text-gray-600 flex flex-col gap-5"
            dangerouslySetInnerHTML={{ __html: blog?.body }}
          />
        </div>
        <div className="w-2/5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-bold text-gray-600 ">
              Comments for this article
            </h3>
            <p>
              <CommentButton />
            </p>
          </div>

          <Comments />
          {/* <p className="text-right mt-3">
            <button
              type="button"
              className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-5 py-1 rounded-full"
            >
              Leave a comment
            </button>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
