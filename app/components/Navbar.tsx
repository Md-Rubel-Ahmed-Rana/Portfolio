"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { navList } from "../constants/navList";
import { IHome } from "../types/home.type";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [data, setData] = useState<any>(null);
  const [currentRoute, setCurrentRoute] = useState("");

  const handleChangeRoute = (route: string) => {
    setCurrentRoute(route);
    localStorage.setItem("RubelCurrentRoute", JSON.stringify(route));
  };

  useEffect(() => {
    const rawPath = localStorage.getItem("RubelCurrentRoute");
    if (rawPath !== null) {
      const path = JSON.parse(rawPath);
      setCurrentRoute(path);
    }
    if (!currentRoute) {
      localStorage.setItem("RubelCurrentRoute", JSON.stringify("home"));
    }
  }, [currentRoute]);

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
        const res = await fetch(
          "https://portfolio-backend-v2-p89h.onrender.com/api/v2/home",
          {
            next: {
              revalidate: 10,
            },
          }
        );

        if (res.ok) {
          const data = await res.json();
          const homeData = data.data as IHome;
          setData(homeData);
        }
      } catch (error) {
        // Handle error
        console.error("Error fetching home data:", error);
        throw new Error("Failed to fetch home data. Please try again later.");
      }
    };

    getHomeData();
  }, []);

  const { logo, email, phoneNumber } = data || {};

  return (
    <nav className="bg-white flex flex-col justify-center shadow-md overflow-hidden p-5 w-[100%]">
      <div className="text-center pt-2 pb-0 mb-0">
        <p
          title="Thinking is 50% of a work"
          className="lg:text-lg  text:sm font-light text-blue-800"
        >
          Thought comprises half the work.
        </p>
      </div>
      <div className="flex justify-between items-center lg:p-5 pt-0 mt-0">
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <img
              title="Logo"
              className="lg:w-16 lg:h-16 w-10 h-10 rounded-full"
              src={logo}
              alt="Logo"
            />
          </Link>
          <div className="font-semibold text-gray-500 lg:text-lg text-xs">
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
        <div className="lg:block hidden">
          <ul className="flex items-center gap-4 font-semibold text-gray-500 text-lg">
            {navList.map((nav) => (
              <li
                onClick={() => handleChangeRoute(nav.toLowerCase())}
                title={nav}
                key={nav}
                className={`${style.navList} ${
                  currentRoute === nav.toLowerCase() &&
                  "text-white bg-blue-600 px-3 rounded-sm"
                }`}
              >
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
        <div className="dropdown dropdown-end lg:hidden">
          <Button
            onClick={handleClick}
            tabIndex={0}
            role="button"
            aria-describedby={id}
            className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-4 py-1 rounded-full"
          >
            Menu
          </Button>
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
                  title={nav}
                  key={nav}
                  className={style.navList}
                >
                  <Link href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}>
                    {nav}
                  </Link>
                </li>
              ))}
            </ul>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
