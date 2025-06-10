/* eslint-disable @next/next/no-img-element */
import { IProject } from "../types/project.type";
import Link from "next/link";
import { getProjectDuration } from "../utils/getProjectDuration";
import { getProjectData } from "../apis/project.api";

export async function generateMetadata() {
  const projects = await getProjectData();

  return {
    title: "Projects: Md Rubel Ahmed Rana",
    description: projects
      ?.map((project) => project.name)
      .join(",")
      .concat(projects?.map((project) => project.description).join(","))
      .concat(
        projects?.map((project) => project.features.toString()).join(",")
      ),
  };
}

export default async function Projects() {
  const projects = (await getProjectData()) || [];
  return (
    <section className="dark:bg-gray-800 bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto pb-20 pt-10 px-5 flex flex-col gap-10">
        <div>
          <h3 className="font-semibold dark:text-gray-200 text-4xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
            My Showcase Projects
          </h3>
          <p className="text-center text-slate-400 text-xl font-sans mt-5">
            Presenting a curated selection of my latest projects, crafted to
            <br />
            impress and inspire both you and your potential clients
          </p>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
            {projects?.map((project: IProject) => {
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
                  className="border dark:border-transparent dark:bg-gray-700 bg-gray-100 dark:text-gray-300 shadow-md rounded-lg group p-5"
                  key={project.id}
                >
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      className="w-full h-40 rounded-lg hover:scale-110 transition duration-1000"
                      src={thumbnail}
                      alt="project  image"
                    />
                  </div>
                  <div className="w-full mt-4">
                    <h3 className="text-xl font-semibold dark:text-gray-300 text-gray-700">
                      {name}
                    </h3>
                    <p>
                      <span className="text-md font-semibold">Category: </span>{" "}
                      <span>{category}</span>
                    </p>
                    <p>
                      <span className="text-md font-semibold">Total: </span>{" "}
                      <span>{features.length} Features</span>
                    </p>
                    <p>
                      <span className="text-md font-semibold">Status: </span>
                      <span> {projectStatus}</span>
                    </p>
                    <p>
                      <span className="text-md font-semibold"> Duration: </span>
                      <span>
                        {getProjectDuration(
                          projectLength.endDate
                            ? projectLength.endDate
                            : new Date(),
                          projectLength.startDate
                        )}
                      </span>
                    </p>
                    <p>
                      <span className="text-md font-semibold">
                        Description:{" "}
                      </span>
                      <span className="text-sm">
                        {description.length > 200
                          ? `${description.slice(0, 200)} ...`
                          : description}
                      </span>
                    </p>
                    <div className="flex justify-between lg:flex-nowrap flex-wrap gap-3 mt-5">
                      <button
                        type="button"
                        className="lg:w-1/3 w-full bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-2 py-1 rounded-full"
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
                        className="lg:w-1/3 w-full bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white  px-2 py-1 rounded-full"
                      >
                        <a
                          href={liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Preview
                        </a>
                      </button>
                      <Link
                        className="lg:w-1/3 w-full"
                        href={`/projects/${project.id}?n=${project.name
                          .split(" ")
                          .join("-")}&d=${project.description}`}
                      >
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
      </div>
    </section>
  );
}
