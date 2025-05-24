import Projects from "@/components/projects";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const ProjectsPage = () => {
  return (
    <>
      <PageMetadata
        title="Projects - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Projects />
    </>
  );
};

ProjectsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ProjectsPage;
