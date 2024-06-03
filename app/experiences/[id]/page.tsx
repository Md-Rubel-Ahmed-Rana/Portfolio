import { getSingleExperience } from "@/app/apis/experience.api";
import { IExperience } from "@/app/types/experience.type";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = (await getSingleExperience(params.id)) as IExperience;

  return {
    title: `Experience - ${data.name} - ${
      data.designation
    } - ${data.responsibilities.join(", ")}`,
    description: data.responsibilities.join(", "),
  };
}

const ExperienceDetails = async ({ params }: { params: { id: string } }) => {
  const data = (await getSingleExperience(params.id)) as IExperience;

  return (
    <div className="min-h-screen lg:p-8 p-2 bg-gray-100  flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h3 className="lg:text-4xl text-2xl font-bold text-gray-800 text-center mb-4">
          {data.name}
        </h3>
        <div className="text-center mb-6">
          <p className="text-xl text-gray-600">{data.designation}</p>
          <p className="text-sm text-gray-500">{data.workType}</p>
          <p className="text-sm text-gray-500">
            {data.startDate.slice(0, 10)} -{" "}
            {data.endDate ? data.endDate.slice(0, 10) : "Present"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              <span className="font-bold">Location: </span>
              {data.workLocation}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Website: </span>
              {data.website ? (
                <a
                  href={data.website}
                  className="text-blue-500 hover:underline"
                >
                  {data.website}
                </a>
              ) : (
                <small className="italic text-yellow-500">
                  Link not provided
                </small>
              )}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">LinkedIn: </span>
              {data.linkedIn ? (
                <a
                  href={data.linkedIn}
                  className="text-blue-500 hover:underline"
                >
                  {data.linkedIn}
                </a>
              ) : (
                <small className="italic text-yellow-500">
                  Link not provided
                </small>
              )}
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h4 className="text-2xl font-semibold text-gray-700 mb-2">
            Responsibilities
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {data.responsibilities.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-semibold text-gray-700 mb-2">
            Learned New Technologies
          </h4>
          <ul className="list-disc list-inside text-gray-600">
            {data.learnedNewTech.map((tech, index) => (
              <li key={index} className="mb-2">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
