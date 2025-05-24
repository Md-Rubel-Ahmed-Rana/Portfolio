import { FaAward } from "react-icons/fa";
import ExperienceAndCourseCard from "../components/ExperienceAndCourseCard";
import { getCourses } from "../apis/course.api";

const Courses = async () => {
  const courses = (await getCourses()) || [];
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="flex items-center gap-5 lg:text-4xl text-xl">
        <FaAward className="text-[#2a1454] lg:text-5xl text-4xl" />
        <span className="text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Achievements
        </span>
      </h3>
      <div className="flex flex-col gap-5">
        {courses?.map((course) => {
          const { id, name, startDate, endDate, institute, courseDetails } =
            course;
          return (
            <ExperienceAndCourseCard
              key={id}
              id={id}
              startDate={startDate}
              endDate={endDate}
              institute={institute}
              name={name}
              route={"courses"}
              queries={`name=${name}&institute=${institute}&courseDetails=${courseDetails.join(
                ", "
              )}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
