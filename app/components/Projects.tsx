/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ProjectSort from "./ProjectSort";
import { getProjectData } from "../apis/getProjectData";
import { IProject } from "../types/project.type";
import Link from "next/link";

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
          My Recent Works
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
            const { thumbnail, name, category, subTitle } = project;
            return (
              <div
                className="border shadow-lg w-full h-80 rounded-lg relative group overflow-hidden "
                key={project.id}
              >
                <Link href={`projects/${project.id}`}>
                  <img
                    className="w-full h-full rounded-lg hover:scale-110 transition duration-1000"
                    src={thumbnail}
                    alt="project  image"
                  />
                  <div className="w-full absolute animate__animated animate__fadeInUp hidden group-hover:block bottom-0 bg-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] rounded-lg text-white p-5">
                    <h3>{name}</h3>
                    <span> # {category}</span>
                    <p>{subTitle}</p>
                    <hr />
                    <div className="flex justify-between mt-4">
                      <a
                        className="bg-white text-center w-full text-[#8750f7] bg-transparent hover:text-white hover:bg-[#2a1454] transition duration-300 ease-in-out px-4 py-2 rounded-md mr-2"
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source code
                      </a>

                      <a
                        className="bg-white text-center w-full text-[#8750f7] hover:text-white hover:bg-[#8750f7] transition duration-300 ease-in-out px-4 py-2 rounded-md"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live preview
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
