import AddNewSkill from "@/components/addNewSkill";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const AddNewSkillPage = () => {
  return (
    <>
      <PageMetadata
        title="Add New Skill - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <AddNewSkill />
    </>
  );
};

AddNewSkillPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default AddNewSkillPage;
