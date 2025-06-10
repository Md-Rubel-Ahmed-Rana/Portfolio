"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { navList } from "../constants/navList";
import { IHome } from "../types/home.type";
import Popover from "@mui/material/Popover";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { baseApi } from "../apis";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [data, setData] = useState<IHome | null>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const res = await fetch(`${baseApi}/home`, {
          next: {
            revalidate: 10,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const homeData = data?.data as IHome;
          setData(homeData);
        }
      } catch (error) {
        console.error("Error fetching home data:", error);
        throw new Error("Failed to fetch home data. Please try again later.");
      }
    };

    getHomeData();
  }, []);

  const { logo, name } = data || {};

  return (
    <nav className="dark:bg-gray-800 dark:text-white flex flex-col justify-center shadow-md overflow-hidden lg:p-0 p-5">
      <div className="flex justify-between items-center lg:p-3 pt-0 mt-0">
        <div className="border-blue-500 flex justify-between lg:w-auto w-full">
          <div className="flex gap-2 items-center">
            <Link className="" href={"/"}>
              <img
                title="Logo"
                className="lg:w-16 lg:h-16 w-14 h-14 rounded-full"
                src={logo}
                alt="Logo"
              />
            </Link>
            <h2 className="text-lg dark:text-gray-200 font-semibold">{name}</h2>
          </div>
          <div className="dropdown dropdown-end  lg:hidden">
            <div>
              <button
                onClick={handleClick}
                tabIndex={0}
                role="button"
                aria-describedby={id}
                className="bg-gradient-to-l from-purple-800 to-blue-500 p-3 hover:to-purple-800 hover:from-blue-500  text-white rounded-full"
              >
                {open ? (
                  <RxCross2 className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
              <Popover
                className="mt-2"
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <ul className="mt-3 p-2 bg-white shadow menu menu-sm dropdown-content rounded-md w-52">
                  {navList.map((nav) => (
                    <li
                      onClick={handleClose}
                      title={nav.label}
                      key={nav.label}
                      className={style.navList}
                    >
                      <Link href={nav.path}>{nav.label}</Link>
                    </li>
                  ))}
                </ul>
              </Popover>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <ul className="flex items-center gap-4 font-semibold text-lg">
            {navList.map((nav) => (
              <li
                title={nav.label}
                key={nav.label}
                className={`${style.navList} dark:text-gray-200`}
              >
                <Link href={nav.path}>{nav.label}</Link>
              </li>
            ))}
            <ThemeSwitcher />
            <li title="Hire me actionable button">
              <Link href={"/hire-me"}>
                <button className="bg-gradient-to-l ml-3 from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full">
                  Hire Me!
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
