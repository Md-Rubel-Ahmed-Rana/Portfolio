import AddEducation from "@/components/addEducation";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddEducationPage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Blog - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddEducation />
    </>
  );
};

AddEducationPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddEducationPage;
