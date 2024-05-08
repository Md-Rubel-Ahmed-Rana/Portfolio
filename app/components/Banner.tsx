/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaDownload } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { getHomeData } from "../apis/getHomeData";

const Banner = async () => {
  const data = await getHomeData();
  const { name, bannerImage, position, description, resumeLink, socialLinks } =
    data || {};

  return (
    <div className="max-w-[1440px] w-full bg-white mx-auto flex lg:flex-row gap-10 flex-col-reverse justify-between items-center py-16 px-10">
      <div className="flex flex-col justify-between gap-10 max-w-lg">
        <div>
          <h3 className="lg:text-4xl text-2xl font-bold mb-4">
            I&apos;m {name}
          </h3>
          <h4 className="lg:text-3xl text-xl mb-4">
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
              {position}
            </span>
          </h4>
          <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="flex lg:flex-row flex-col items-center lg:gap-5 gap-10">
          <p title="Google drive link will be opened">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <button className="ring-1 hover:text-white shadow-2xl hover:bg-purple-600 transition ease-out duration-200 text-blue-400 px-12 lg:py-3 py-2 rounded-full flex items-center justify-between lg:gap-3 gap-2 lg:text-xl">
                <small>Download CV </small>
                <FaDownload />
              </button>
            </a>
          </p>
          <ul className="flex  items-center gap-5 text-purple-500">
            {socialLinks &&
              socialLinks?.length > 0 &&
              socialLinks.map((link) => {
                const fontAwesome: any = FaIcons;
                const IconComponent = fontAwesome[link.icon];
                return (
                  <li
                    key={Math.random()}
                    title={link.name}
                    className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200 shadow-lg"
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="rounded-full" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        {bannerImage ? (
          <img
            className="rounded-md cursor-pointer lg:w-2/3 w-full transition duration-1000 rotate-3 hover:rotate-0 hover:scale-110"
            src={bannerImage}
            alt="Banner image"
          />
        ) : (
          <div className="rounded-md flex justify-center items-center  bg-gray-100 cursor-pointer w-2/3 h-96 transition duration-1000 rotate-3 hover:rotate-0 hover:scale-110">
            <p className="block">
              Banner image not found <br /> Placeholder image
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
