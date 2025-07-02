import Educations from "@/components/educations";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const EducationsPage = () => {
  return (
    <>
      <PageMetadata
        title="Educations - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Educations />
    </>
  );
};

EducationsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EducationsPage;
