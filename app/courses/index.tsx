import { FaAward } from "react-icons/fa";
import ExperienceAndCourseCard from "../components/ExperienceAndCourseCard";

const courses = [
  {
    name: "Complete Web Development Course",
    startDate: "01-08-2022",
    endDate: "09-01-2024",
    institute: "Programming Hero",
  },
  {
    name: "Advanced Web Development Course",
    startDate: "01-08-2022",
    endDate: "09-01-2024",
    institute: "Programming Hero",
  },
];

const Courses = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="flex items-center gap-5 lg:text-4xl text-xl">
        <FaAward className="text-[#2a1454] lg:text-5xl text-3xl" />
        <span className="text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Achievements
        </span>
      </h3>
      <div className="flex flex-col gap-5">
        {courses.map((course, index) => {
          const { name, startDate, endDate, institute } = course;
          return (
            <ExperienceAndCourseCard
              key={index}
              id={index}
              startDate={startDate}
              endDate={endDate}
              institute={institute}
              name={name}
              route={"courses"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
