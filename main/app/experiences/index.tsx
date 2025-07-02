import { FaBiohazard } from "react-icons/fa";
import { getExperiences } from "../apis/experience.api";
import ExperienceCard from "../components/ExperienceCard";

const Experiences = async () => {
  const experiences = (await getExperiences()) || [];
  return (
    <div className="max-w-[1440px] w-full mx-auto flex flex-col gap-8 px-4 py-20">
      <h3 className="flex justify-center items-center gap-5 lg:text-4xl text-xl">
        <FaBiohazard className="dark:text-white text-[#2a1454] lg:text-5xl text-4xl" />
        <span className="dark:text-gray-300 text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Experiences
        </span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {experiences?.map((experience) => (
          <ExperienceCard experience={experience} key={experience?.id} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
