import Skills from "@/components/skills";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const SkillsPage = () => {
  return (
    <>
      <PageMetadata
        title="Skills - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Skills />
    </>
  );
};

SkillsPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default SkillsPage;
