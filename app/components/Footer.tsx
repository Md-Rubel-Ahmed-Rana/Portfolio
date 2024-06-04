/* eslint-disable @next/next/no-img-element */
import React from "react";
import { navList } from "../constants/navList";
import Link from "next/link";
import { getHomeData } from "../apis/getHomeData";

const Footer = async () => {
  const data = await getHomeData();
  const { name, logo } = data || {};
  return (
    <div className="bg-[#2a1454]">
      <div className="max-w-[1440px] w-full mx-auto lg:py-16 py-10 lg:px-10 px-3">
        <div className="flex flex-col flex-wrap gap-5 justify-center items-center">
          <div>
            <Link href={"/"}>
              <img
                title="Logo"
                className="w-16 h-16 rounded-full"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div>
            <ul className="flex items-center flex-wrap justify-center gap-4 font-semibold">
              {navList.map((nav) => (
                <li
                  className="text-white lg:text-md text-sm"
                  title={nav.label}
                  key={Math.random()}
                >
                  <Link href={nav.path}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              title={`The owner of the website: ${name}`}
              className="lg:text-lg text-sm font-semibold text-blue-500"
            >
              © {new Date().getFullYear()} All rights reserved by {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
