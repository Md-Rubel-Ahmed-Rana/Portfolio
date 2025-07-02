import EditEducation from "@/components/editEducation";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const EducationEditPage = () => {
  return (
    <>
      <PageMetadata
        title="Edit Education - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditEducation />
    </>
  );
};

EducationEditPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EducationEditPage;
