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
      <div className="max-w-[1440px] w-full mx-auto py-16 px-10 ">
        <div className="flex flex-col gap-5 justify-center items-center">
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
            <ul className="flex items-center gap-4 font-semibold">
              {navList.map((nav) => (
                <li className="text-white" title={nav} key={Math.random()}>
                  <Link href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}>
                    {nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              title={`The owner of the website: ${name}`}
              className="text-lg font-semibold text-blue-500"
            >
              © 2024 All rights reserved by {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
