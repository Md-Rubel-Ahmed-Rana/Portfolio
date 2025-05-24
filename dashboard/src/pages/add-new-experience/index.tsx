import AddNewExperience from "@/components/addNewExperience";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewExperiencePage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Experience - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewExperience />
    </>
  );
};

AddNewExperiencePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewExperiencePage;
