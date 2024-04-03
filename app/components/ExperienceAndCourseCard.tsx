import Link from "next/link";
import React from "react";

type Props = {
  id: string | number;
  name: string;
  startDate: string;
  endDate: string;
  institute: string;
  route: string;
};

const ExperienceAndCourseCard = (props: Props) => {
  const { id, name, startDate, endDate, institute, route } = props;
  return (
    <div
      className="bg-white p-5 transition ease-out duration-75 rounded-lg flex flex-col gap-2 bg-transparent bg-gradient-to-l hover:to-[#8750f7] hover:from-[#2a1454] hover:text-white group relative"
      key={Math.random()}
    >
      <p className="text-xl font-semibold text-blue-500 group-hover:text-white">
        {startDate} | {endDate}
      </p>
      <h4 className="text-3xl font-bold">{name}</h4>
      <p className="text-md font-sans text-gray-700 group-hover:text-white">
        {institute}
      </p>
      <Link
        className={`hidden animate__animated ${
          route === "experiences"
            ? "animate__fadeInLeft"
            : "animate__fadeInRight"
        }  group-hover:block absolute bottom-2 right-5 bg-white text-[#8750f7] hover:text-white hover:bg-[#8750f7] transition duration-300 ease-in-out px-10 py-2 rounded-md`}
        href={`/${route}/${id}`}
      >
        Details
      </Link>
    </div>
  );
};

export default ExperienceAndCourseCard;
