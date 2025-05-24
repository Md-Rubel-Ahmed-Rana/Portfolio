import Blogs from "@/components/blogs";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const BlogsPage = () => {
  return (
    <>
      <PageMetadata
        title="Blogs - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Blogs />
    </>
  );
};

BlogsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default BlogsPage;
