/* eslint-disable @next/next/no-img-element */
import { useUpdateBannerImageMutation } from "@/features/home.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Card } from "antd/lib";
import { useState } from "react";
import UploadSingleImage from "../common/UploadSingleImage";

type Props = {
  imageLink: string;
  id: string;
};

const BannerImage = ({ id, imageLink }: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [updateImage, { isLoading }] = useUpdateBannerImageMutation();

  const handleUploadImage = async () => {
    const formData = new FormData();

    if (image) {
      formData.append("bannerImage", image as Blob);
      await handleAsyncMutation(
        updateImage,
        { id, image: formData },
        200,
        {
          error: "Failed to update image",
          success: "Image updated successfully",
        },
        "/personal-info"
      );
      setOpen(false);
    }
  };

  return (
    <Card
      title={
        <div className="flex items-center gap-2">
          <h5>Banner Image</h5>
          <UploadSingleImage
            button={{ size: "middle", text: "Change", type: "default" }}
            modal={{ title: "Change banner image" }}
            key={"banner-image"}
            uploadHandler={handleUploadImage}
            image={image}
            isLoading={isLoading}
            setImage={setImage}
            setOpen={setOpen}
            open={open}
          />
        </div>
      }
      className="rounded-2xl shadow-md"
    >
      <img
        src={imageLink}
        alt="Banner"
        className="rounded-xl max-h-96 object-cover w-full"
      />
    </Card>
  );
};

export default BannerImage;
