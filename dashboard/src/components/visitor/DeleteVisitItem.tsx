/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeleteVisitorMutation } from "@/features/visitor.api";
import { showAlertMessage } from "@/utils/showAlertMessage";
import { Button, Tooltip } from "antd/lib";

type Props = {
  id: string;
};

const DeleteVisitItem = ({ id }: Props) => {
  const [removeVisitor, { isLoading }] = useDeleteVisitorMutation();

  const handleDelete = async () => {
    const res: any = await removeVisitor({ id });
    if (res?.data?.statusCode === 200) {
      showAlertMessage("success", "Visitor history removed successfully");
    } else {
      showAlertMessage("error", "Failed to remove visitor");
    }
  };

  return (
    <Tooltip title="Remove visitor history">
      <Button
        onClick={handleDelete}
        disabled={isLoading}
        loading={isLoading}
        size="small"
        danger
        variant="filled"
        type="primary"
      >
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </Tooltip>
  );
};

export default DeleteVisitItem;
