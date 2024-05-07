"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import style from "./Navbar.module.css";
import { navList } from "../constants/navList";
import { IHome } from "../types/home.type";
import useHandlePropagation from "../hooks/useHandlePropagation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [data, setData] = useState<any>(null);
  const [toggle, setToggle] = useState(false);
  const toggleRef = useRef(null);
  const closeDropdown = useHandlePropagation();

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

  useEffect(() => {
    closeDropdown(toggleRef, setToggle);
  }, [closeDropdown]);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className="flex flex-col justify-center shadow-md overflow-hidden p-5 w-[100%]">
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
              <li title={nav} key={nav} className={style.navList}>
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
          <div
            tabIndex={0}
            role="button"
            className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-4 py-1 rounded-full"
          >
            Menu
          </div>
          <ul
            ref={toggleRef}
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52"
          >
            {navList.map((nav) => (
              <li title={nav} key={nav} className={style.navList}>
                <Link href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}>
                  {nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <div id="dropdown-menu" className="lg:hidden dropdown dropdown-end">
          <div tabIndex={0} role="button">
            {!toggle && (
              <button onClick={handleToggle}>
                <FaBars />
              </button>
            )}

            {toggle && (
              <button onClick={handleToggle}>
                <FaTimes />
              </button>
            )}
          </div>
          {toggle && (
            <ul
              ref={toggleRef}
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-md w-52"
            >
              {navList.map((nav) => (
                <li title={nav} key={nav} className={style.navList}>
                  <Link href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`}>
                    {nav}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
