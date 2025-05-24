import { DeleteFilled, UploadOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import { Button, Image, Space, Typography, Upload } from "antd/lib";

const { Title } = Typography;

type ManageToUpdateImagesProps = {
  setNewImages: (images: (File | string)[]) => void;
  setNewThumbnail: (thumbnail: File | string) => void;
  newImages: (string | File)[];
  thumbnail: string | File;
};

const ManageToUpdateImages = ({
  newImages,
  thumbnail,
  setNewThumbnail,
  setNewImages,
}: ManageToUpdateImagesProps) => {
  const getPreview = (img: string | File) => {
    return typeof img === "string" ? img : URL.createObjectURL(img);
  };

  const handleThumbnailChange = (info: UploadChangeParam) => {
    const file = info.file as unknown as File;
    if (file) {
      setNewThumbnail(file);
    }
  };

  const handleImageChange = (info: UploadChangeParam) => {
    const files = info.fileList
      .map((file) => file.originFileObj as File)
      .filter(Boolean);
    const updatedFiles = [...newImages, ...files];
    setNewImages(updatedFiles);
  };

  const handleRemoveImage = (index: number) => {
    setNewImages(newImages.filter((_, i) => i !== index));
  };

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <div>
        <Title level={4}>Thumbnail</Title>
        <div className="flex flex-col gap-1">
          <Image
            width={150}
            height={150}
            src={getPreview(thumbnail)}
            alt="Thumbnail"
            style={{ objectFit: "cover", borderRadius: 8 }}
            className="border border-gray-300 rounded-md"
          />
          <Upload
            showUploadList={false}
            accept="image/*"
            beforeUpload={() => false}
            onChange={handleThumbnailChange}
          >
            <Button icon={<UploadOutlined />} className="mt-2 ml-2">
              Change
            </Button>
          </Upload>
        </div>
      </div>

      <div className="flex flex-col">
        <Title level={4}>Project Images</Title>
        <Space direction="horizontal" size="middle" wrap>
          {newImages.map((img, index) => (
            <div
              className="flex flex-col gap-1 items-center justify-center"
              key={index}
            >
              <Image
                width={150}
                height={150}
                src={getPreview(img)}
                alt={`Image ${index + 1}`}
                style={{ objectFit: "cover", borderRadius: 8 }}
                className="border border-gray-300 rounded-md"
              />
              <Button
                onClick={() => handleRemoveImage(index)}
                icon={<DeleteFilled />}
                size="small"
              >
                Remove
              </Button>
            </div>
          ))}
        </Space>
        <Upload
          showUploadList={false}
          accept="image/*"
          multiple
          beforeUpload={() => false}
          onChange={(info) => handleImageChange(info)}
        >
          <Button type="primary" icon={<UploadOutlined />} className="mt-2">
            Add New Image
          </Button>
        </Upload>
      </div>
    </Space>
  );
};

export default ManageToUpdateImages;
