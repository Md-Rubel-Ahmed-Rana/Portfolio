import { useUpdateHomeMutation } from "@/features/home.api";
import { IPersonalInfo } from "@/types/home.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Input, Modal } from "antd/lib";
import { useState } from "react";

type Props = {
  data: IPersonalInfo;
};

const EditPersonalInfo = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [update, { isLoading }] = useUpdateHomeMutation();
  const [updatedData, setUpdatedData] = useState({
    name: data?.name,
    position: data?.position,
    phoneNumber: data?.phoneNumber,
    email: data?.email,
  });

  const handleInputChange = (key: string, value: string) => {
    setUpdatedData({ ...updatedData, [key]: value });
  };

  const handleUpdateChanges = async () => {
    await handleAsyncMutation(
      update,
      {
        id: data?.id,
        data: { ...data, ...updatedData },
      },
      200,
      { error: "Failed to update", success: "Personal info updated" },
      "/personal-info"
    );
  };

  return (
    <>
      <Button type="default" size="small" onClick={() => setOpen(true)}>
        Edit
      </Button>

      <Modal
        open={open}
        title="Update basic info"
        okText={isLoading ? "Saving..." : "Save changes"}
        cancelText="cancel"
        cancelButtonProps={{ disabled: isLoading }}
        onCancel={() => setOpen(false)}
        onOk={handleUpdateChanges}
        maskClosable={!isLoading}
        okButtonProps={{
          disabled: isLoading,
          loading: isLoading,
          iconPosition: "end",
        }}
      >
        <div className="flex flex-col gap-3">
          <Input
            name="name"
            onChange={(e) => handleInputChange("name", e.target.value)}
            defaultValue={data?.name}
          />
          <Input
            name="email"
            onChange={(e) => handleInputChange("email", e.target.value)}
            type="email"
            defaultValue={data?.email}
          />
          <Input
            name="position"
            onChange={(e) => handleInputChange("position", e.target.value)}
            defaultValue={data?.position}
          />
          <Input
            name="phoneNumber"
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            defaultValue={data?.phoneNumber}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditPersonalInfo;
