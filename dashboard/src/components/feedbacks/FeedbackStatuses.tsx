import { useUpdateFeedbackMutation } from "@/features/feedback.api";
import { IFeedback } from "@/types/feedback.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { showAlertMessage } from "@/utils/showAlertMessage";
import { Button, Dropdown, Menu } from "antd/lib";

type Props = {
  feedback: IFeedback;
};

const FeedbackStatuses = ({ feedback }: Props) => {
  const [changeStatus, { isLoading }] = useUpdateFeedbackMutation();
  const handleStatusChange = (status: string) => {
    if (status === feedback.status) {
      showAlertMessage("warning", "No need to change same status");
      return;
    } else {
      handleAsyncMutation(
        changeStatus,
        {
          id: feedback?.id,
          updatedData: { ...feedback, status: status },
        },
        200,
        {
          error: "Failed to change status",
          success: "Status updated successfully",
        },
        "/feedback"
      );
    }
  };

  const renderMenu = () => (
    <Menu
      onClick={({ key }) => handleStatusChange(key)}
      items={[
        { key: "approved", label: "Approve" },
        { key: "rejected", label: "Reject" },
        { key: "pending", label: "Pending" },
      ]}
    />
  );
  return (
    <Dropdown disabled={isLoading} overlay={renderMenu} key="status">
      <Button
        disabled={isLoading}
        loading={isLoading}
        iconPosition="end"
        className="text-blue-500"
      >
        {isLoading ? "Changing..." : "Change Status"}
      </Button>
    </Dropdown>
  );
};

export default FeedbackStatuses;
