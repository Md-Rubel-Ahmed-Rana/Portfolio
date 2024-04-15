/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { navList } from "../constants/navList";
import { getHomeData } from "../apis/getHomeData";

const Navbar = async () => {
  const data = await getHomeData();
  const { logo, email, phoneNumber } = data || {};
  return (
    <nav className="flex flex-col justify-center shadow-md ">
      <div className="text-center pt-2 pb-0 mb-0">
        <p
          title="Thinking is 50% of a work"
          className="text-lg font-light text-blue-800"
        >
          Thought comprises half the work.
        </p>
      </div>
      <div className="flex justify-between items-center p-5 pt-0 mt-0">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <img
              title="Logo"
              className="w-16 h-16 rounded-full"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="font-semibold text-gray-500 text-lg">
            <p title="Click to send email">
              <a
                href={`mailto:${email}?subject=Contact Mail&body=Start writing your message`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email}
              </a>
            </p>
            <p title="Click to make call">
              <a
                href={`tel:${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phoneNumber}
              </a>
            </p>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-4 font-semibold text-gray-500 text-lg">
            {navList.map((nav) => (
              <li title={nav} key={Math.random()} className={style.navList}>
                <Link href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}>
                  {nav}
                </Link>
              </li>
            ))}
            <li title="Hire me actionable button">
              <button className="bg-gradient-to-l ml-3 from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full">
                Hire Me!
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
