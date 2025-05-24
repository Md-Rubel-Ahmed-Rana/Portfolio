import PersonalInfo from "@/components/personalInfo";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const PersonalInfoPage = () => {
  return (
    <>
      <PageMetadata
        title="Personal info - Rubel Ahmed Rana - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <PersonalInfo />
    </>
  );
};

PersonalInfoPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PersonalInfoPage;
