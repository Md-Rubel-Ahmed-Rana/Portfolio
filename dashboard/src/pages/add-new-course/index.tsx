import AddNewCourse from "@/components/AddNewCourse";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewCoursePage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Course - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewCourse />
    </>
  );
};

AddNewCoursePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewCoursePage;
