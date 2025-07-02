import { FaAward } from "react-icons/fa";
import { getCourses } from "../apis/course.api";
import CourseCard from "../components/CourseCard";

const Courses = async () => {
  const courses = (await getCourses()) || [];
  return (
    <div className="max-w-[1440px] mx-auto w-full py-20 flex flex-col gap-8 px-2 lg:px-4">
      <h3 className="flex justify-center items-center gap-5 lg:text-4xl text-xl">
        <FaAward className="dark:text-white text-[#2a1454] lg:text-5xl text-4xl" />
        <span className="dark:text-gray-300 text-transparent font-semibold bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Achievements
        </span>
      </h3>
      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {courses?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
