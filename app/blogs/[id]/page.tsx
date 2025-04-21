/* eslint-disable @next/next/no-img-element */
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import blogDateFormatter from "@/app/utils/blogDateFormatter";
import { getBlogsData, getSingleBlogData } from "@/app/apis/blog.api";
import extractSectionTitleAndMakeUrl from "@/app/utils/extractSectionTitleAndMakeUrl";
import BlogSections from "./BlogSections";
import MorePosts from "./MorePosts";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = await getSingleBlogData(params.id);

  return {
    title: blog.title,
    description: extractSectionTitleAndMakeUrl(blog.body),
  };
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
  const blog = await getSingleBlogData(params.id);

  return (
    <section className="bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-5 flex flex-col gap-10">
        <div className="w-full  flex flex-col gap-2 group">
          <h5 className="text-xl font-semibold leading-7 text-gray-800 group-hover:text-blue-600">
            {blog?.title}
          </h5>
          <div className="lg:flex items-center gap-10 text-gray-600 text-sm font-sans">
            <p className="flex items-center gap-2">
              <FaUserCircle />
              <span>By Md Rubel Ahmed Rana</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Posted on</span>
              <FaCalendarAlt />
              <span>{blogDateFormatter(blog.createdAt).large}</span>
            </p>
          </div>
          <p>
            <button className="bg-gradient-to-l text-sm from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-md">
              {blog?.type.toUpperCase()}
            </button>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {blog?.tags.map((tag, index) => (
              <button
                key={index}
                className="bg-gradient-to-l text-sm from-green-800 to-teal-500 hover:to-green-800 hover:from-teal-700  text-white px-2 py-1 rounded-full"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="overflow-hidden my-5">
            <img
              className="rounded-md border border-blue-500 w-full max-h-[300px] h-full  transition duration-700 hover:scale-110"
              src={
                blog.thumbnail || "https://i.ibb.co/ZdZ1R7V/image-Not-Found.png"
              }
              alt={blog?.title || "Blog image"}
            />
          </div>
        </div>
        <BlogSections sections={blog.body} />
        {/* <div className="lg:w-2/5 w-full h-full border rounded-md bg-gray-100 p-3 shadow-md">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-5 mb-3">
            <h3 className="text-2xl font-bold text-gray-600 ">
              Comments for this article
            </h3>
            <p>
              <CommentButton id={blog.id} postType={"Blog"} />
            </p>
          </div>
          <Comments postId={blog.id} />
        </div> */}
        <MorePosts id={params.id} />
      </div>
    </section>
  );
};

export default BlogDetails;

export async function generateStaticParams() {
  const blogs = await getBlogsData();

  return blogs.map((blog) => ({ id: blog.id }));
}
