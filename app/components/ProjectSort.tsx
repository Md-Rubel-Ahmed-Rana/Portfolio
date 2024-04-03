"use client";

import React, { useState } from "react";

const ProjectSort = () => {
  const [sortItem, setSortItem] = useState("All");
  const sortItems = ["All", "Frontend", "Backend", "Full Stack"];
  return (
    <ul className="w-2/5 mx-auto flex shadow-lg items-center justify-center gap-5 text-blue-600 text-xl bg-gray-200 rounded-full">
      {sortItems.map((item) => (
        <li key={Math.random()}>
          <button
            onClick={() => setSortItem(item)}
            className={`${
              sortItem === item &&
              "to-[#8750f7] from-[#2a1454] text-white  bg-blue-600"
            } bg-transparent bg-gradient-to-r  px-5 py-3 rounded-full border hover:border-blue-500`}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProjectSort;
