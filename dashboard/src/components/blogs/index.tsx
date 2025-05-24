import { useGetAllBlogsQuery } from "@/features/blog.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IBlog } from "@/types/blog.type";
import PageHeader from "../common/PageHeader";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});
  const blogs = (data?.data || []) as IBlog[];
  return (
    <>
      <PageHeader
        title="Blog"
        total={blogs?.length}
        addNewPath="/add-new-blog"
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
          {blogs.map((blog) => (
            <BlogCard key={blog?.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
};

export default Blogs;
