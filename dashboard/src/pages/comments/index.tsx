import Comments from "@/components/comments";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const CommentsPage = () => {
  return (
    <>
      <PageMetadata
        title="Comments - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Comments />
    </>
  );
};

CommentsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CommentsPage;
