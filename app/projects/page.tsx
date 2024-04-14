/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { getProjectData } from "../apis/getProjectData";
import { IProject } from "../types/project.type";
import Link from "next/link";
import ProjectSort from "../components/ProjectSort";
import { getProjectDuration } from "../utils/getProjectDuration";

export const metadata: Metadata = {
  title: "Projects: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

export default async function Projects() {
  const projects = (await getProjectData()) as IProject[];
  return (
    <section className="max-w-[1440px] w-full mx-auto py-20 px-5 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Showcase Projects
        </h3>
        <p className="text-center text-slate-500 text-xl font-sans mt-5">
          Presenting a curated selection of my latest projects, crafted to
          <br />
          impress and inspire both you and your potential clients
        </p>
      </div>
      <div>
        <ProjectSort />
        <div className="grid grid-cols-3 gap-5 mt-10">
          {projects.map((project: IProject) => {
            const {
              thumbnail,
              name,
              category,
              description,
              features,
              projectStatus,
              sourceCode,
              liveLink,
              projectLength,
            } = project;
            return (
              <div
                className="border shadow-lg rounded-lg group p-5"
                key={project.id}
              >
                <img
                  className="w-full h-40 rounded-lg hover:scale-110 transition duration-1000"
                  src={thumbnail}
                  alt="project  image"
                />
                <div className="w-full mt-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {name}
                  </h3>
                  <p className="text-sm">
                    <span>Category: </span> <span>{category}</span>
                  </p>
                  <p className="text-sm">
                    <span>Total: </span> <span>{features.length} Features</span>
                  </p>
                  <p className="text-sm">
                    <span>Status: </span>
                    <span> {projectStatus}</span>
                  </p>
                  <p className="text-sm">
                    <span> Duration: </span>
                    <span>
                      {getProjectDuration(
                        projectLength.endDate,
                        projectLength.startDate
                      )}
                    </span>
                  </p>
                  <p className="text-sm">{description}</p>
                  <div className="flex justify-between gap-3 mt-5">
                    <button
                      type="button"
                      className="w-full bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full"
                    >
                      <a
                        href={sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code
                      </a>
                    </button>
                    <button
                      type="button"
                      className="w-full bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-2 py-1 rounded-full"
                    >
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Preview
                      </a>
                    </button>
                    <Link className="w-full" href={`projects/${project.id}`}>
                      <button
                        type="button"
                        className="w-full bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-2 py-1 rounded-full"
                      >
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
