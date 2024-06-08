/* eslint-disable @next/next/no-img-element */
import { getProjectData, getSingleProjectData } from "@/app/apis/project.api";
import CommentButton from "@/app/components/CommentButton";
import Comments from "@/app/components/Comments";
import ProjectImages from "@/app/components/ProjectImages";
import { countDays } from "@/app/utils/countDays";
import { getProjectDuration } from "@/app/utils/getProjectDuration";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = await getSingleProjectData(params.id);

  return {
    title: `Project: ${project.name} - Md Rubel Ahmed Rana`,
    description: `${project.description} ${project.features.toString()}`,
  };
}

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getSingleProjectData(params.id);
  const {
    id,
    name,
    category,
    description,
    features,
    images = [],
    liveLink,
    projectLength: { endDate, startDate },
    projectStatus,
    sourceCode,
    subTitle,
    techStack,
    thumbnail,
  } = data;

  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-20 px-5 flex lg:flex-row flex-col gap-20">
        <div className="lg:w-3/5 w-full">
          <ProjectImages images={images} thumbnail={thumbnail} />
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-gray-700">{name}</h3>
            <h4 className="text-lg">{subTitle}</h4>
            <h6 className="font-serif text-md"># {category}</h6>
            <p>
              <span className="font-semibold">Source code: </span>
              <a
                className="text-md text-blue-500 hover:underline"
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sourceCode}
              </a>
            </p>
            <p>
              <span className="font-semibold">Live preview: </span>
              {liveLink ? (
                <a
                  className="text-md text-blue-500 hover:underline"
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {liveLink}
                </a>
              ) : (
                <span className="text-yellow-600 italic">
                  Project was not deployed.
                </span>
              )}
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold">Project Status:</span>
              <span>{projectStatus}</span>
            </p>
            {endDate && (
              <p className="flex gap-2 items-center">
                <span className="font-semibold">Project duration:</span>
                <span>{getProjectDuration(endDate, startDate)}</span>
              </p>
            )}
            {!endDate && (
              <p className="flex gap-2 items-center">
                <span className="font-semibold">Project started:</span>
                <span>{countDays(startDate)}</span>
              </p>
            )}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Project Features: </h3>
            <ul className="list-decimal ml-6">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Technology used: </h3>
            <div className="flex gap-20">
              <ul className="list-disc ml-6">
                {techStack.slice(0, 10).map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <ul className="list-disc ml-6">
                {techStack.slice(10, techStack.length).map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            <span className="block font-semibold text-gray-500 text-lg mt-5">
              Description:{" "}
            </span>
            <span className="ml-2">{description}</span>
          </p>
        </div>
        <div className="lg:w-2/5 w-full">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-5 mb-3">
            <h3 className="text-2xl font-bold text-gray-600 ">
              Comments for this project
            </h3>
            <p>
              <CommentButton id={id} postType={"Project"} />
            </p>
          </div>
          <Comments postId={id} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

export async function generateStaticParams() {
  const projects = await getProjectData();

  return projects.map((project) => ({ id: project.id }));
}
