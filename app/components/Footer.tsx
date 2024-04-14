import React from "react";
import { navList } from "../constants/navList";
import Link from "next/link";
import Image from "next/image";
import Logo from "../favicon.ico";

const Footer = () => {
  return (
    <div className="bg-[#2a1454]">
      <div className="max-w-[1440px] w-full mx-auto py-16 px-10 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div>
            <Link href={"/"}>
              <Image
                title="Logo"
                className="w-16 h-16 rounded-full"
                src={Logo}
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
              title="The owner of the website: Md Rubel Ahmed Rana"
              className="text-lg font-semibold text-blue-500"
            >
              © 2024 All rights reserved by Md Rubel Ahmed Rana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
