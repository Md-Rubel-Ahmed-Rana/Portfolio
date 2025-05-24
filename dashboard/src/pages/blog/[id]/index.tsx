import BlogDetails from "@/components/blogDetails";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const BlogDetailsPage = () => {
  const { query } = useRouter();
  const title = query?.title as string;
  return (
    <>
      <PageMetadata
        title={`Blog - ${
          title || "loading..."
        } - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <BlogDetails />
    </>
  );
};

BlogDetailsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default BlogDetailsPage;
