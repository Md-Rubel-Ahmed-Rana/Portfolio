import {
  useDeleteFeedbackMutation,
  useGetAllFeedbacksQuery,
} from "@/features/feedback.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IFeedback } from "@/types/feedback.type";
import getStatusColor from "@/utils/getStatusColor";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Tag } from "antd";
import DeleteCardItemModal from "../common/DeleteCardItemModal";
import FeedbackStatuses from "./FeedbackStatuses";

const Feedbacks = () => {
  const { data, isLoading } = useGetAllFeedbacksQuery({});
  const feedbacks = (data?.data || []) as IFeedback[];

  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <Card
              key={fb.id}
              className="shadow-lg rounded-2xl border border-gray-100"
              variant={"outlined"}
              actions={[
                <FeedbackStatuses key={"status"} feedback={fb} />,
                <DeleteCardItemModal
                  itemId={fb?.id}
                  itemName={`${fb.name}'s`}
                  itemCategory="feedback"
                  useReduxMutation={useDeleteFeedbackMutation}
                  key={"delete"}
                />,
              ]}
            >
              <div className="flex items-start gap-4">
                <Avatar
                  src={fb?.image}
                  icon={<UserOutlined />}
                  size={64}
                  className="border border-gray-300"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {fb?.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {fb?.designation} @ {fb?.company}
                  </p>
                  <Tag color={getStatusColor(fb.status)}>
                    {fb.status.toUpperCase()}
                  </Tag>
                </div>
              </div>
              <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                “{fb.feedback}”
              </p>
              <div className="text-xs text-gray-400 mt-4">
                Created: {new Date(fb.createdAt).toLocaleDateString()}
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default Feedbacks;
