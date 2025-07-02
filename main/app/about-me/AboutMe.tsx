/* eslint-disable @next/next/no-img-element */
import { Card } from "antd/lib";
import { getHomeData } from "../apis/getHomeData";
import Image from "next/image";
import { aboutMeData } from "../constants/aboutme";

const AboutMe = async () => {
  const data = await getHomeData();
  const { name, bannerImage, position, aboutMe = "" } = data || {};

  return (
    <Card className="shadow-md rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={bannerImage}
            alt={name}
            className="rounded-xl h-[300px] object-cover w-full  shadow-md"
          />
        </div>

        <div className="w-full md:w-2/3">
          <h1 className="text-2xl md:text-3xl mb-2 font-bold">{name}</h1>
          <h2 className="text-blue-600 mb-4 text-lg font-semibold">
            {position}
          </h2>
          <p className="!text-gray-700 text-lg font-serif whitespace-pre-line">
            {aboutMe || aboutMeData}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AboutMe;
