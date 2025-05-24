import Login from "@/components/login";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const LoginPage = () => {
  return (
    <>
      <PageMetadata
        title="Login - Md Rubel Ahmed Rana - CMS - Admin Dashboard"
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <Login />
    </>
  );
};

LoginPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default LoginPage;
