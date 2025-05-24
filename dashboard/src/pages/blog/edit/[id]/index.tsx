import EditBlog from "@/components/editBlog";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const EditBlogPage = () => {
  const { query } = useRouter();
  const title = query?.title as string;
  return (
    <>
      <PageMetadata
        title={`Edit Blog - ${
          title || "loading..."
        } - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditBlog />
    </>
  );
};

EditBlogPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EditBlogPage;
