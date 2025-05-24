import ForgetPassword from "@/components/forgetPassword";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const ForgetPasswordPage = () => {
  return (
    <>
      <PageMetadata
        title="Forget Password - Md Rubel Ahmed Rana - CMS - Admin Dashboard"
        description="Forget Password page"
        keywords="rubel, forget password, login"
      />
      <ForgetPassword />
    </>
  );
};

ForgetPasswordPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ForgetPasswordPage;
