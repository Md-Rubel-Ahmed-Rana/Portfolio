import { FaBiohazard } from "react-icons/fa";
import ExperienceAndCourseCard from "../components/ExperienceAndCourseCard";

const experiences = [
  {
    name: "Little Programmers",
    size: "Startup",
    type: "Software Company",
    designation: "Full Stack Developer",
    workLocation: "Onsite",
    location: "Sylhet, Bangladesh",
    startDate: "01-08-2023",
    endDate: "09-01-2024",
    website: "https://www.abccorporation.com",
    linkedIn: "https://www.linkedin.com/company/abccorporation",
    responsibilities: ["Developed new features", "Debugged and fixed issues"],
    learnedNewTech: ["React", "Node.js"],
  },
  {
    name: "RemoStart",
    size: "Startup",
    type: "Technology",
    designation: "Frontend Developer",
    workLocation: "Remote",
    location: "Bangalore, India",
    startDate: "01-05-2023",
    endDate: "31-07-2023",
    website: "https://www.xyzsolutions.com",
    linkedIn: "https://www.linkedin.com/company/xyzsolutions",
    responsibilities: [
      "Designed and implemented database schemas",
      "Optimized application performance",
    ],
    learnedNewTech: ["Angular", "MongoDB"],
  },
];

const Experiences = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="flex items-center gap-5 text-4xl">
        <FaBiohazard className="text-[#2a1454] text-5xl" />
        <span className="text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Experience
        </span>
      </h3>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, index) => {
          const { startDate, endDate, designation, location } = exp;
          return (
            <ExperienceAndCourseCard
              key={index}
              id={index}
              startDate={startDate}
              endDate={endDate}
              institute={location}
              name={designation}
              route={"experiences"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
