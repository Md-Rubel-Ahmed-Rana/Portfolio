import { useUpdateLogoMutation } from "@/features/home.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Avatar } from "antd/lib";
import { useState } from "react";
import UploadSingleImage from "../common/UploadSingleImage";

type Props = {
  imageUrl: string;
  id: string;
};

const Logo = ({ id, imageUrl }: Props) => {
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [updateLogo, { isLoading }] = useUpdateLogoMutation();

  const handleUploadImage = async () => {
    const formData = new FormData();

    if (image) {
      formData.append("logo", image as Blob);
      await handleAsyncMutation(
        updateLogo,
        { id, image: formData },
        200,
        {
          error: "Failed to update logo",
          success: "Logo updated successfully",
        },
        "/personal-info"
      );
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Avatar src={imageUrl} size={100} className="mb-2" />
      <UploadSingleImage
        button={{ size: "middle", text: "Change", type: "default" }}
        modal={{ title: "Change website logo" }}
        key={"logo"}
        uploadHandler={handleUploadImage}
        image={image}
        isLoading={isLoading}
        setImage={setImage}
        setOpen={setOpen}
        open={open}
      />
    </div>
  );
};

export default Logo;
