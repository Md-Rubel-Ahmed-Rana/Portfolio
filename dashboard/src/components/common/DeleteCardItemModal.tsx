/* eslint-disable @typescript-eslint/no-explicit-any */
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd/lib";
import { useState } from "react";

type Props = {
  itemId: string;
  itemName: string;
  itemCategory:
    | "experience"
    | "service"
    | "project"
    | "course"
    | "skill"
    | "feedback"
    | "blog"
    | "comment"
    | "education";
  useReduxMutation: any;
  isButton?: boolean;
  buttonSize?: "large" | "middle" | "small";
};

const DeleteCardItemModal = ({
  itemId,
  itemName,
  itemCategory,
  useReduxMutation,
  isButton,
  buttonSize,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [deleteItem, { isLoading }] = useReduxMutation();

  const handleDeleteItem = async () => {
    await handleAsyncMutation(
      deleteItem,
      { id: itemId },
      200,
      {
        error: `Failed to delete ${itemCategory}`,
        success: `${itemCategory} deleted successfully`,
      },
      `/${itemCategory}s`
    );
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={`Delete ${itemCategory}`} key="delete">
        {isButton ? (
          <Button
            size={buttonSize}
            onClick={() => setOpen(true)}
            type="primary"
            danger
          >
            Delete
          </Button>
        ) : (
          <Button
            onClick={() => setOpen(true)}
            type="text"
            danger
            icon={<DeleteOutlined />}
          />
        )}
      </Tooltip>
      <Modal
        title={`Delete ${itemCategory}`}
        open={open}
        onOk={handleDeleteItem}
        onCancel={() => setOpen(false)}
        okText={isLoading ? "Deleting..." : "Delete"}
        cancelText="Cancel"
        okButtonProps={{
          disabled: isLoading,
          iconPosition: "end",
          loading: isLoading,
        }}
        cancelButtonProps={{ disabled: isLoading }}
        maskClosable={!isLoading}
      >
        <p>
          Are you sure you want to delete <strong>{itemName}</strong>{" "}
          {itemCategory}?
        </p>
        <p className="text-yellow-600">This action cannot be undone.</p>
      </Modal>
    </>
  );
};

export default DeleteCardItemModal;
