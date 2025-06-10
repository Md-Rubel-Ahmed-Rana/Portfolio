import { getBlogsData } from "@/app/apis/blog.api";
import { IBlog } from "@/app/types/blog.type";
import extractSectionTitleAndMakeUrl from "@/app/utils/extractSectionTitleAndMakeUrl";
import Link from "next/link";
import React from "react";

const MorePosts = async ({ id }: { id: string }) => {
  const AllBlogs = ((await getBlogsData()) || []) as IBlog[];
  const blogs = AllBlogs.filter((blog) => blog?.id !== id);
  return (
    <div>
      <h3 className="text-lg lg:text-2xl font-semibold mb-3 dark:text-gray-300">
        More posts
      </h3>
      <div className="flex flex-col gap-2">
        {blogs.map((blog) => (
          <Link
            className="text-blue-500 underline"
            key={blog.id}
            href={`/blogs/${blog.id}?title=${blog.title
              .split(" ")
              .join("-")}&s=${extractSectionTitleAndMakeUrl(blog.body)}`}
          >
            {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MorePosts;
