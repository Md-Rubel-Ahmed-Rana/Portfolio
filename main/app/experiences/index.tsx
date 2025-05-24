import { FaBiohazard } from "react-icons/fa";
import ExperienceAndCourseCard from "../components/ExperienceAndCourseCard";
import { getExperiences } from "../apis/experience.api";

const Experiences = async () => {
  const experiences = (await getExperiences()) || [];
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="flex items-center gap-5 lg:text-4xl text-xl">
        <FaBiohazard className="text-[#2a1454] lg:text-5xl text-4xl" />
        <span className="text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Experience
        </span>
      </h3>
      <div className="flex flex-col gap-5">
        {experiences?.map((exp) => {
          const {
            id,
            startDate,
            endDate,
            designation,
            location,
            name,
            workType,
            responsibilities,
          } = exp;
          return (
            <ExperienceAndCourseCard
              key={id}
              id={id}
              startDate={startDate}
              endDate={endDate}
              institute={location}
              name={designation}
              position={name}
              route={"experiences"}
              workType={workType}
              queries={`name=${name}&designation=${designation}&responsibilities=${responsibilities.join(
                ", "
              )}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experiences;
