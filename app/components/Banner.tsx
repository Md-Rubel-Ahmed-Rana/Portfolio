/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaDownload } from "react-icons/fa";
import { getHomeData } from "../apis/getHomeData";
import { socialLinks } from "../constants/socialLinks";

const Banner = async () => {
  const data = await getHomeData();
  const banner = data.bannerSection;
  const { name, image, position, description, resumeLink } = banner || {};

  return (
    <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center py-16 px-10">
      <div className="flex flex-col justify-between gap-10 max-w-lg">
        <div>
          <h3 className="text-4xl font-bold mb-4">I&apos;m {name}</h3>
          <h4 className="text-3xl mb-4">
            <span className="font-semibold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">
              {position}
            </span>
          </h4>
          <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div className="flex items-center gap-5">
          <p title="Google drive link will be opened">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <button className="ring-1 hover:text-white shadow-2xl hover:bg-purple-600 transition ease-out duration-200 text-blue-400 px-10 py-3 rounded-full flex items-center justify-between gap-3 text-xl">
                <small>Download CV </small>
                <FaDownload />
              </button>
            </a>
          </p>
          <ul className="flex items-center gap-5 text-purple-500">
            {socialLinks.map((link) => (
              <li
                key={Math.random()}
                title={link.name}
                className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200 shadow-lg"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="rounded-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="rounded-md cursor-pointer w-2/3 transition duration-1000 rotate-3 hover:rotate-0"
          src={image}
          alt="Banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
