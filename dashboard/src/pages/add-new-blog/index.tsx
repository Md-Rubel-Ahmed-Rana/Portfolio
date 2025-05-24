import AddNewBlog from "@/components/addNewBlog";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewBlogPage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Blog - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewBlog />
    </>
  );
};

AddNewBlogPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewBlogPage;
