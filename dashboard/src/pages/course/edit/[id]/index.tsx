import EditCourse from "@/components/editCourse";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const EditCoursePage = () => {
  const { query } = useRouter();
  const name = query?.name as string;
  return (
    <>
      <PageMetadata
        title={`Edit Project - ${
          name || "loading..."
        } - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditCourse />
    </>
  );
};

EditCoursePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EditCoursePage;
