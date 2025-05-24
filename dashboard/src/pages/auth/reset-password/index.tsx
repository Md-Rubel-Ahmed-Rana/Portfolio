import ResetPassword from "@/components/reset-password";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

const ResetPasswordPage = () => {
  return (
    <>
      <PageMetadata
        title="Reset Password - Md Rubel Ahmed Rana - CMS - Admin Dashboard"
        description="Reset Password page"
        keywords="rubel, reset password, login"
      />
      <ResetPassword />
    </>
  );
};

ResetPasswordPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ResetPasswordPage;
