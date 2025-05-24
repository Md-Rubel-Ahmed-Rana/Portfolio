/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import {
  useDeleteCommentMutation,
  useGetAllCommentsQuery,
} from "@/features/comment.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IComment } from "@/types/comment.type";
import { Avatar, Table, Tag } from "antd/lib";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

const Comments = () => {
  const { data, isLoading } = useGetAllCommentsQuery({});
  const comments: IComment[] = data?.data?.map((comment: IComment) => ({
    ...comment,
    post: { ...comment?.postId },
  }));

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
      render: (_: string, record: IComment) => (
        <div className="flex items-center gap-3">
          {record?.image ? (
            <img
              src={record?.image}
              alt={record?.name}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <Avatar>{record?.name?.slice(0, 1).toUpperCase()}</Avatar>
          )}

          <span>{record?.name}</span>
        </div>
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      render: (text: string) => <div className="max-w-xs truncate">{text}</div>,
    },
    {
      title: "Post",
      dataIndex: "post",
      key: "post",
      render: (post: { name: string; title: string }) => {
        console.log(post);
        return (
          <div className="max-w-xs truncate">{post?.name || post?.title}</div>
        );
      },
    },
    {
      title: "Post Type",
      dataIndex: "postType",
      key: "postType",
      render: (type: IComment["postType"]) => (
        <Tag color={type === "Blog" ? "blue" : "green"}>{type}</Tag>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: IComment) => (
        <DeleteCardItemModal
          key={"delete"}
          itemId={record?.id}
          itemName={record?.comment}
          itemCategory="comment"
          isButton={true}
          buttonSize="small"
          useReduxMutation={useDeleteCommentMutation}
        />
      ),
    },
  ];

  return (
    <div className="p-4">
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <Table
          rowKey="id"
          columns={columns}
          dataSource={comments}
          pagination={{ pageSize: 10 }}
          bordered
        />
      )}
    </div>
  );
};

export default Comments;
