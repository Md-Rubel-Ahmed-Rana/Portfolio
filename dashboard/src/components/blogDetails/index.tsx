import { useGetBlogByIdQuery } from "@/features/blog.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IBlog } from "@/types/blog.type";
import { Divider, Image, Tag, Typography } from "antd/lib";
import { useRouter } from "next/router";
import DataNotFound from "../common/DataNotFound";
import DisplayRichText from "./DisplayRichText";

const { Title, Text } = Typography;

const BlogDetails = () => {
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetBlogByIdQuery({ id });
  const blog = data?.data as IBlog;

  if (isLoading) return <GenericLoadingSkeleton />;

  return (
    <>
      {blog && blog?.id ? (
        <div className="p-4">
          <div className="mb-4">
            <Title>{blog?.title}</Title>
            <Tag color="blue">{blog?.type}</Tag>
            <div className="mt-2">
              {blog?.tags?.map((tag) => (
                <Tag key={tag} color="blue" className="capitalize">
                  #{tag}
                </Tag>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              <Text type="secondary">
                Created: {new Date(blog?.createdAt).toLocaleDateString()}
              </Text>{" "}
              |{" "}
              <Text type="secondary">
                Updated: {new Date(blog?.updatedAt).toLocaleDateString()}
              </Text>{" "}
              | <Text type="secondary">Comments: {blog?.comments ?? 0}</Text>
            </div>
          </div>

          <div className="mb-6">
            <Image
              src={blog.thumbnail as string}
              alt="Blog Thumbnail"
              className="rounded-xl"
              width={800}
            />
          </div>

          {blog.body.map((section) => (
            <div key={section.id} className="mb-10">
              <Title level={3} className="mb-2">
                {section.title}
              </Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {section?.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image as string}
                    alt={`Section Image ${idx + 1}`}
                    className="rounded-md border border-blue-500"
                  />
                ))}
              </div>

              <DisplayRichText description={section?.description} />
              <Divider />
            </div>
          ))}
        </div>
      ) : (
        <DataNotFound
          title="Blog was not found!"
          description="The blog you are looking was not found. It might be removed or restricted."
        />
      )}
    </>
  );
};

export default BlogDetails;
