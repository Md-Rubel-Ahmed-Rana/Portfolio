import { getProjectData } from "@/app/apis/project.api";
import { IProject } from "@/app/types/project.type";
import Link from "next/link";
import React from "react";

const MoreProjects = async ({ id }: { id: string }) => {
  const AllProjects = ((await getProjectData()) || []) as IProject[];
  const projects = AllProjects.filter((blog) => blog?.id !== id);
  return (
    <div className="border-t-2  border-gray-300">
      <h3 className="text-lg lg:text-2xl font-semibold my-3">More projects</h3>
      <div className="flex flex-col gap-2">
        {projects?.map((project) => (
          <Link
            className="text-blue-500 underline"
            key={project.id}
            href={`/projects/${project.id}?n=${project.name
              .split(" ")
              .join("-")}&d=${project.description}`}
          >
            {project.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
