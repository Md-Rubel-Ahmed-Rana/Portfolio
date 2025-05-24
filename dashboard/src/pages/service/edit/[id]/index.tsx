import EditService from "@/components/editService";
import RootLayout from "@/layout";
import PageMetadata from "@/utils/PageMetadata";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const ServiceEditPage = () => {
  const { query } = useRouter();
  const name = query?.name as string;
  return (
    <>
      <PageMetadata
        title={`Edit Service - ${
          name || "loading..."
        } - Rubel Ahmed Rana - Admin Dashboard`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      <EditService />
    </>
  );
};

ServiceEditPage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ServiceEditPage;
