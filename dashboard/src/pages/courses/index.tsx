import Courses from "@/components/courses";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const CoursesPage = () => {
  return (
    <>
      <PageMetadata
        title="Courses - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Courses />
    </>
  );
};

CoursesPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CoursesPage;
