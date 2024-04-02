import React from "react";
import BannerImage from "../public/images/BannerImage.png";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <div className="flex flex-col justify-between gap-10 max-w-lg">
        <div>
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
        <div className="flex items-center gap-5">
          <p>
            <a
              href="https://drive.google.com/file/d/16Da_lp3ezXAJvKEtvvNcRfIQuNcHyodH/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ring-1 hover:text-white hover:bg-purple-600 transition ease-out duration-200 text-blue-400 px-10 py-3 rounded-full flex items-center justify-between gap-3 text-xl">
                <small>Download CV </small>
                <FaDownload />
              </button>
            </a>
          </p>
          <ul className="flex items-center gap-5 text-purple-500">
            <li className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200">
              <a
                href="https://www.linkedin.com/in/md-rubel-ahmed-rana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200">
              <a
                href="https://github.com/Md-Rubel-Ahmed-Rana"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200">
              <a
                href="https://web.facebook.com/mdrubelahmed.rana.98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="text-xl ring-1 rounded-full p-2 hover:text-white hover:bg-purple-600 transition ease-out duration-200">
              <a
                href="https://wa.link/63ahuf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          className="rounded-md cursor-pointer w-2/3 transition ease-out duration-200 rotate-3 hover:rotate-0"
          src={BannerImage}
          alt="Banner image"
          placeholder="blur"
          objectFit="cover"
          objectPosition="revert"
        />
      </div>
    </div>
  );
};

export default Banner;
