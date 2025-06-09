/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const ProjectImages = ({
  thumbnail,
  images,
}: {
  thumbnail: string;
  images: string[];
}) => {
  const [toggleImage, setToggleImage] = useState(thumbnail);
  const [pImages, setPImages] = useState(images);

  const handleToggleImage = (image: string) => {
    const remainingImages = pImages.filter((img) => img !== image);
    setPImages(() => [...remainingImages, toggleImage]);
    setToggleImage(image);
  };
  return (
    <div className="">
      <div className="overflow-hidden border border-blue-500 shadow-md rounded-md p-1">
        <img
          className="w-full max-h-[400px] h-full  rounded-md hover:scale-110 transition duration-500"
          src={toggleImage}
          alt={"Project thumbnail image"}
        />
      </div>
      <h3 className="text-center my-2 text-lg font-semibold text-gray-600">
        Screenshots
      </h3>
      <div className="flex justify-center items-center gap-3 px-10 pb-4 mb-4 w-full overflow-auto">
        {pImages?.map((image, index) => (
          <img
            title="Click to view largely"
            onClick={() => handleToggleImage(image)}
            className="rounded-md hover:scale-110 transition duration-500 lg:w-32 w-24 h-24 border cursor-pointer border-blue-500"
            key={index}
            src={image}
            alt={"Project image"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectImages;
