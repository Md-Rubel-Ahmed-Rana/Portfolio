import Experiences from "@/components/experiences";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const ExperiencesPage = () => {
  return (
    <>
      <PageMetadata
        title="Experiences - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Experiences />
    </>
  );
};

ExperiencesPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ExperiencesPage;
