import { getCourses, getSingleCourse } from "@/app/apis/course.api";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await getSingleCourse(params.id);

  return {
    title: `Course - ${data.name} - ${
      data.institute
    } - ${data.courseDetails.join(", ")}`,
    description: data.courseDetails.join(", "),
  };
}

const CourseDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getSingleCourse(params.id);
  return (
    <div className="min-h-screen lg:p-8 p-2 dark:bg-gray-800 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl dark:bg-gray-800 bg-white shadow-lg rounded-lg p-6">
        <h3 className="lg:text-4xl text-2xl font-bold dark:text-gray-300 text-gray-700 text-center mb-4">
          {data.name}
        </h3>
        <div className="text-center mb-6">
          <p className="text-xl dark:text-gray-300 text-gray-600">
            {data.institute}
          </p>
          <p className="text-sm dark:text-gray-300 text-gray-500">
            {data.startDate.slice(0, 10)} -{" "}
            {data.endDate ? data.endDate.slice(0, 10) : "Present"}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold dark:text-gray-300">Duration:</span>{" "}
            {data.duration}
          </p>
          <p className="dark:text-gray-300">
            <span className="font-semibold">Passing Year:</span>{" "}
            {data.passingYear}
          </p>
          <div>
            <span className="font-semibold dark:text-gray-300">
              Course Details:
            </span>
            <ul className="list-disc pl-4 dark:text-gray-300">
              {data?.courseDetails?.map((detail, index) => (
                <li className="mb-2" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
