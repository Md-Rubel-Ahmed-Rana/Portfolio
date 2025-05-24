import AddNewService from "@/components/addNewService";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewServicePage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Service - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewService />
    </>
  );
};

AddNewServicePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewServicePage;
