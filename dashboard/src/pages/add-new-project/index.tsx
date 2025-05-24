import AddNewProject from "@/components/addNewProject";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewProjectPage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Project - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewProject />
    </>
  );
};

AddNewProjectPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewProjectPage;
