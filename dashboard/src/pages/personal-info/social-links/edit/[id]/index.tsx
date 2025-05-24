import EditSocialLinks from "@/components/editSocialLinks";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const EditSocialLinksPage = () => {
  return (
    <>
      <PageMetadata
        title={`Edit social links  - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditSocialLinks />
    </>
  );
};

EditSocialLinksPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default EditSocialLinksPage;
