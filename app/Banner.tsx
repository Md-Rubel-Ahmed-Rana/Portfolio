import React from "react";
import BannerImage from "../public/images/BannerImage.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="max-w-lg">
        <h3 className="text-4xl font-bold mb-4">
          I&apos;m Md Rubel Ahmed Rana
        </h3>
        <h4 className="text-3xl mb-4">
          <span className="font-semibold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
            Full Stack Developer
          </span>
        </h4>
        <p className="text-xl text-gray-700 leading-relaxed">
          As a full stack developer, I thrive on breaking down complex
          applications into micro parts, delving deep into their core points.
          This approach allows me to craft error-free, bug-free applications
          that stand the test of time.
        </p>
      </div>
      <div className="">
        <Image
          className="rounded-md cursor-pointer  transition ease-out duration-200 rotate-3 hover:rotate-0"
          src={BannerImage}
          alt="Banner image"
          layout="cover"
          placeholder="blur"
          objectFit="cover"
          objectPosition="revert"
        />
      </div>
    </div>
  );
};

export default Banner;
