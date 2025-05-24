import { useUpdateHomeMutation } from "@/features/home.api";
import { IPersonalInfo } from "@/types/home.type";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Input, Modal } from "antd/lib";
import { useState } from "react";

type Props = {
  data: IPersonalInfo;
};

const EditAddressInfo = ({ data }: Props) => {
  const [open, setOpen] = useState(false);
  const [update, { isLoading }] = useUpdateHomeMutation();
  const [updatedData, setUpdatedData] = useState({
    address: data?.address,
    addressMapLocation: data?.addressMapLocation,
    description: data?.description,
    resumeLink: data?.resumeLink,
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
      <Button
        type="primary"
        size="middle"
        className="mt-3 "
        onClick={() => setOpen(true)}
      >
        Update data
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
            name="address"
            onChange={(e) => handleInputChange("address", e.target.value)}
            defaultValue={data?.address}
          />
          <Input
            name="addressMapLocation"
            onChange={(e) =>
              handleInputChange("addressMapLocation", e.target.value)
            }
            defaultValue={data?.addressMapLocation}
          />
          <Input
            name="resumeLink"
            onChange={(e) => handleInputChange("resumeLink", e.target.value)}
            defaultValue={data?.resumeLink}
          />
          <Input.TextArea
            name="description"
            onChange={(e) => handleInputChange("description", e.target.value)}
            defaultValue={data?.description}
            rows={4}
          />
        </div>
      </Modal>
    </>
  );
};

export default EditAddressInfo;
