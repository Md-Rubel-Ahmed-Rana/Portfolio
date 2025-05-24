/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import createFilePreviewUrl from "@/utils/createFilePreviewUrl";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Modal, Upload } from "antd/lib";

type Props = {
  button: {
    text: string;
    size: "small" | "middle" | "large";
    type: "primary" | "text" | "default";
  };
  modal: {
    title: string;
  };
  image: File | null;
  setImage: (file: File | null) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  isLoading: boolean;
  uploadHandler: any;
};

const UploadSingleImage = ({
  button,
  modal,
  isLoading,
  image,
  setImage,
  uploadHandler,
  open,
  setOpen,
}: Props) => {
  const uploader = () => {
    return (
      <Upload
        beforeUpload={() => false}
        showUploadList={false}
        accept="image/*"
        maxCount={1}
        onChange={(info: any) => setImage(info.file)}
      >
        <Button icon={<UploadOutlined />}>Select Image</Button>
      </Upload>
    );
  };

  return (
    <>
      <Button
        type={button.type}
        size={button.size}
        onClick={() => setOpen(true)}
      >
        {button.text}
      </Button>

      <Modal
        title={
          image ? (
            <div className="flex items-center gap-2">
              <span>{modal.title}</span>
              {uploader()}
            </div>
          ) : (
            modal.title
          )
        }
        open={open}
        onCancel={() => {
          setOpen(false);
          setImage(null);
        }}
        onOk={uploadHandler}
        okText={isLoading ? "Uploading..." : "Upload"}
        okButtonProps={{ disabled: !image || isLoading }}
        maskClosable={!isLoading}
        cancelButtonProps={{ disabled: isLoading }}
        className="flex flex-col gap-2"
      >
        {!image && uploader()}
        {image && (
          <img
            src={createFilePreviewUrl(image)}
            alt={`Image`}
            style={{ objectFit: "cover", borderRadius: 8 }}
            className="border border-gray-300 rounded-md  h-[300px]"
          />
        )}
      </Modal>
    </>
  );
};

export default UploadSingleImage;
