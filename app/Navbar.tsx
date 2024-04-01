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
          <Image className="w-16 h-16 rounded-full" src={Logo} alt="Logo" />
          <div className="font-semibold text-gray-500 text-lg">
            <p>mdrubelahmedrana521@gmail.com</p>
            <p>+880 1758 049882</p>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-4 font-semibold text-gray-500 text-lg">
            <li className="transition duration-300 ease-in-out underline hover:text-gray-800">
              <Link href={"/"}>Home</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/services"}>Services</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/works"}>Works</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/skills"}>Skills</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/projects"}>Projects</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/blogs"}>Blogs</Link>
            </li>
            <span>|</span>
            <li className="transition duration-300 ease-in-out hover:underline hover:text-gray-800">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li>
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
