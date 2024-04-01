import React from "react";
import Logo from "./favicon.ico";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center shadow-md ">
      <div className="text-center pt-2 pb-0 mb-0">
        <p className="text-lg font-light text-blue-800">
          Thought comprises half the work.
        </p>
      </div>
      <div className="flex justify-between items-center p-5 pt-0 mt-0">
        <div className="flex gap-2 items-center">
          <Image className="w-12 h-12 rounded-full" src={Logo} alt="Logo" />
          <h3 className="font-bold text-3xl">Md Rubel Ahmed Rana</h3>
        </div>
        <div>
          <ul className="flex items-center gap-2 font-semibold text-gray-500 text-2xl">
            <li className="transition duration-300 ease-in-out underline">
              <Link href={"/"}>Home</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/services"}>Services</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/works"}>Works</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/skills"}>Skills</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <span>|</span>
            <li>
              <button className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-3 rounded-full">
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
