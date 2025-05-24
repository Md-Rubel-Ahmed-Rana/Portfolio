import { useGetProjectByIdQuery } from "@/features/project.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IProject } from "@/types/project.type";
import { useRouter } from "next/router";
import DataNotFound from "../common/DataNotFound";
import EditProjectForm from "./EditProjectForm";

const EditProject = () => {
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetProjectByIdQuery({ id });
  const project = data?.data as IProject;
  console.log(project);
  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>
          {project && project?.id ? (
            <EditProjectForm project={project} />
          ) : (
            <DataNotFound
              title="Project not found"
              description="The project your looking for is not found. It might be removed and something happen."
            />
          )}
        </>
      )}
    </>
  );
};

export default EditProject;
