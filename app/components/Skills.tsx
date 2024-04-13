import { getIcon } from "@/app/utils/getIcons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const skillsData = [
  {
    name: "HTML",
    percentage: 100,
  },
  {
    name: "CSS",
    percentage: 100,
  },
  {
    name: "JavaScript",
    percentage: 100,
  },
  {
    name: "Reactjs",
    percentage: 100,
  },
  {
    name: "Nextjs",
    percentage: 90,
  },
  {
    name: "Nodejs",
    percentage: 80,
  },
  {
    name: "Nestjs",
    percentage: 80,
  },
  {
    name: "MongoDB",
    percentage: 80,
  },
  {
    name: "Expressjs",
    percentage: 80,
  },
  {
    name: "Docker",
    percentage: 80,
  },
  {
    name: "PostgresQL",
    percentage: 80,
  },
  {
    name: "Microservice",
    percentage: 80,
  },
];

const Skills = () => {
  return (
    <div className="max-w-[1440px] w-full mx-auto py-16 px-10 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Skills
        </h3>
        <p className="text-center text-slate-500 text-xl font-sans mt-5">
          Dive into a showcase of my finest creations, meticulously designed to
          captivate
          <br />
          and ignite the imagination of your audience and stakeholders alike.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-5 ">
        {skillsData.map((skill) => {
          const IconComponent = getIcon(skill?.name);
          return (
            <div
              className=" border flex flex-col text-center hover:bg-purple-950 hover:text-white gap-3 justify-between items-center p-3 rounded-2xl cursor-pointer shadow-md group"
              key={Math.random()}
            >
              <div>
                {IconComponent && (
                  <IconComponent className="text-6xl text-blue-600 group-hover:text-white" />
                )}{" "}
                <p className="text-xl font-semibold text-gray-500 mt-3 group-hover:text-blue-500">
                  {skill.percentage}%
                </p>
              </div>
              <h6 className="text-blue-600 group-hover:text-white">
                {skill.name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
