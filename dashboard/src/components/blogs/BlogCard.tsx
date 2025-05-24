/* eslint-disable @next/next/no-img-element */
import { useDeleteBlogMutation } from "@/features/blog.api";
import { IBlog } from "@/types/blog.type";
import extractSectionTitle from "@/utils/extractSectionTitleAndMakeUrl";
import {
  CalendarOutlined,
  EditOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Button, Card, Tag, Typography } from "antd/lib";
import Link from "next/link";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

const { Title } = Typography;

type Props = {
  blog: IBlog;
};

const BlogCard = ({ blog }: Props) => {
  return (
    <Link
      href={`/blog/${blog?.id}?title=${blog?.title}&type=${
        blog?.type
      }&s=${extractSectionTitle(blog.body)}`}
    >
      <Card
        hoverable
        className="rounded-2xl shadow-md overflow-hidden"
        cover={
          <img
            alt={blog?.title}
            src={blog?.thumbnail as string}
            className="h-64 object-cover w-full"
          />
        }
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Tag color="blue" className="capitalize">
              {blog?.type}
            </Tag>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarOutlined />
                <span>{new Date(blog?.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <EditOutlined />
                <span>{new Date(blog?.updatedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <Title level={3} className="!m-0">
            {blog?.title}
          </Title>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-gray-600 mt-4">
              <MessageOutlined />
              <span>
                {blog?.comments} Comment{blog?.comments !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/blog/edit/${blog?.id}?title=${blog?.title
                  .split(" ")
                  .join("-")}&s=${extractSectionTitle(blog.body)}`}
              >
                <Button type="default" size="small">
                  Edit
                </Button>
              </Link>
              <DeleteCardItemModal
                itemId={blog?.id}
                itemName={blog?.title}
                itemCategory="blog"
                useReduxMutation={useDeleteBlogMutation}
                isButton={true}
                buttonSize="small"
              />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
