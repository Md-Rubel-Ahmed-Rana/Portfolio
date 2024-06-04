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

const Navbar = () => {
  const [data, setData] = useState<any>(null);
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
      <div className="text-center pt-2 pb-0 lg:mb-0 mb-5">
        <p
          title="Thinking is 50% of a work"
          className="lg:text-lg  text:sm font-light text-blue-800"
        >
          Thought comprises half the work.
        </p>
      </div>
      <div className="flex justify-between items-center lg:p-5 pt-0 mt-0">
        <div className="flex gap-2 items-center">
          <Link className="lg:block hidden" href={"/"}>
            <img
              title="Logo"
              className="lg:w-16 lg:h-16 w-10 h-10 rounded-full"
              src={logo || "https://i.ibb.co/ysPqGGS/mdrubelahmedrana-Logo.jpg"}
              alt="Logo"
            />
          </Link>
          <div className="dropdown dropdown-end lg:hidden mr-4">
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
          <div className="font-semibold flex flex-col gap-2 text-gray-500 lg:text-lg text-xs">
            <p title="Click to send email">
              <a
                href={`mailto:${
                  email || "mdrubelahmedrana521@gmail.com"
                }?subject=Contact Mail&body=Start writing your message`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {email || "mdrubelahmedrana521@gmail.com"}
              </a>
            </p>
            <p title="Click to make call">
              <a
                href={`tel:${phoneNumber || "+880 1758 049882"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {phoneNumber || "+880 1758 049882"}
              </a>
            </p>
          </div>
        </div>
        <div className="lg:block hidden">
          <ul className="flex items-center gap-4 font-semibold text-gray-500 text-lg">
            {navList.map((nav) => (
              <li title={nav.label} key={nav.label} className={style.navList}>
                <Link href={nav.path}>{nav.label}</Link>
              </li>
            ))}
            <li title="Hire me actionable button">
              <Link href={"/services"}>
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
