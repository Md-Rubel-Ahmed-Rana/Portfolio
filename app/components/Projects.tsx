/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { getProjectData } from "../apis/project.api";

export const metadata: Metadata = {
  title: "Projects: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

export default async function Projects() {
  const projects = await getProjectData();
  return (
    <section className="max-w-[1440px] w-full bg-white mx-auto py-20 px-5 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold lg:text-4xl text-2xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Recent Works
        </h3>
        <p className="text-center text-slate-500 lg:text-xl text-lg font-sans mt-5">
          Presenting a curated selection of my latest projects, crafted to
          <br className="lg:block hidden" />
          impress and inspire both you and your potential clients
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {projects.map((project) => {
            const { id, thumbnail, name, category, subTitle, description } =
              project;
            return (
              <div
                className="border shadow-lg w-full h-80 rounded-lg relative group overflow-hidden "
                key={id}
              >
                <img
                  className="w-full h-full rounded-lg hover:scale-110 transition duration-1000"
                  src={thumbnail}
                  alt="project  image"
                />
                <div className="w-full absolute animate__animated animate__fadeInUp block  lg:hidden lg:group-hover:block bottom-0 bg-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] rounded-lg text-white p-5">
                  <Link
                    href={`/projects/${id}?n=${name
                      .split(" ")
                      .join("-")}&d=${description}`}
                  >
                    <h3 className="lg:text-xl underline text-sm">{name}</h3>
                  </Link>
                  <span className="lg:text-md text-xs"> # {category}</span>
                  <p className="lg:text-md text-xs">{subTitle}</p>
                  <hr />
                  <div className="flex justify-between items-center mt-4">
                    <Link
                      className="bg-white text-center w-full text-[#8750f7] bg-transparent hover:text-white hover:bg-[#2a1454] transition duration-300 ease-in-out lg:px-4 px-2 py-1 lg:py-2 rounded-md mr-2"
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code
                    </Link>

                    <Link
                      className="bg-white text-center w-full text-[#8750f7] hover:text-white hover:bg-[#8750f7] transition duration-300 ease-in-out lg:px-4 lg:py-2 px-2 py-1 rounded-md"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live preview
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
