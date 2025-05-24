import CreateUser from "@/components/createUser";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const CreateUserPage = () => {
  return (
    <>
      <PageMetadata
        title="Create User - Md Rubel Ahmed Rana - CMS - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <CreateUser />
    </>
  );
};

CreateUserPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default CreateUserPage;
