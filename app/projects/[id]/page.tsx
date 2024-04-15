/* eslint-disable @next/next/no-img-element */
import { getSingleProjectData } from "@/app/apis/getSingleProjectData";
import CommentButton from "@/app/components/CommentButton";
import Comments from "@/app/components/Comments";
import { IProject } from "@/app/types/project.type";
import React from "react";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  const data = (await getSingleProjectData(params.id)) as IProject;
  const {
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
      <div className="max-w-[1440px] w-full mx-auto py-20 px-5 flex gap-20">
        <div className="w-3/5">
          <div className="overflow-hidden">
            <img
              className="w-full h-80 rounded-md hover:scale-110 transition duration-500"
              src={thumbnail}
              alt={name}
            />
          </div>
          <div className="flex justify-center items-center gap-3 my-4">
            {images?.map((image, index) => (
              <img
                className="rounded-md hover:scale-110 transition duration-500 w-32 h-24 border cursor-pointer"
                key={index}
                src={image}
                alt={name}
              />
            ))}
          </div>
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
              <a
                className="text-md text-blue-500 hover:underline"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {liveLink}
              </a>
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold">Project Status:</span>
              <span>{projectStatus}</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="font-semibold">Project duration:</span>
              <span>{endDate?.toString() + "-" + startDate?.toString()}</span>
            </p>
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
        <div className="w-2/5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-bold text-gray-600 ">
              Comments for this project
            </h3>
            <p>
              <CommentButton />
            </p>
          </div>

          <Comments />
          {/* <p className="text-right mt-3">
            <button
              type="button"
              className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-5 py-1 rounded-full"
            >
              Leave a comment
            </button>
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
