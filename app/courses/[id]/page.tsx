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
    <div className="min-h-screen lg:p-8 p-2 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h3 className="lg:text-4xl text-2xl font-bold text-gray-700 text-center mb-4">
          {data.name}
        </h3>
        <div className="text-center mb-6">
          <p className="text-xl text-gray-600">{data.institute}</p>
          <p className="text-sm text-gray-500">
            {data.startDate.slice(0, 10)} -{" "}
            {data.endDate ? data.endDate.slice(0, 10) : "Present"}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">Duration:</span> {data.duration}
          </p>
          <p>
            <span className="font-semibold">Passing Year:</span>{" "}
            {data.passingYear}
          </p>
          <p>
            <span className="font-semibold">Result:</span> {data.result}
          </p>
          <div>
            <span className="font-semibold">Course Details:</span>
            <ul className="list-disc pl-4">
              {data.courseDetails.map((detail, index) => (
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
