import { Metadata } from "next";
import { aboutMeData } from "../constants/aboutme";
import AboutMe from "./AboutMe";
import EducationalBackground from "./EducationalBackground";

export const metadata: Metadata = {
  title: "About : Md Rubel Ahmed Rana",
  description: aboutMeData,
};

const AboutMePage = async () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto pb-20 lg:pt-10 pt-2 px-2 lg:px-10 flex flex-col gap-10 bg-white dark:bg-gray-800">
      <AboutMe />
      <EducationalBackground />
    </div>
  );
};

export default AboutMePage;
