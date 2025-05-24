import { useGetProjectsQuery } from "@/features/project.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IProject } from "@/types/project.type";
import PageHeader from "../common/PageHeader";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data, isLoading } = useGetProjectsQuery({});
  const projects = (data?.data || []) as IProject[];
  return (
    <>
      <PageHeader
        total={projects?.length || 0}
        title="Project"
        addNewPath="/add-new-project"
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <section className="flex flex-col gap-4 px-2">
          {projects.map((project) => (
            <ProjectCard project={project} key={project?.id} />
          ))}
        </section>
      )}
    </>
  );
};

export default Projects;
