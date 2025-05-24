import EditExperience from "@/components/editExperience";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const EditExperiencePage = () => {
  const { query } = useRouter();
  const name = query?.name as string;
  return (
    <>
      <PageMetadata
        title={`Edit Experience - ${
          name || "loading..."
        } - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditExperience />
    </>
  );
};

EditExperiencePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EditExperiencePage;
