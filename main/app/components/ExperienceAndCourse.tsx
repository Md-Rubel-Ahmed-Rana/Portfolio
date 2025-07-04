import Experiences from "../experiences";
import Courses from "../courses";

const ExperienceAndCourse = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-16 px-5">
        <div className="lg:w-10/12 flex lg:flex-row flex-col justify-between mx-auto gap-10">
          <Experiences />
          <hr className="lg:hidden block" />
          <Courses />
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndCourse;
