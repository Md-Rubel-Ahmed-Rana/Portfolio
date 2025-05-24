import Home from "@/components/home";
import Login from "@/components/login";
import { useGetLoggedInUserQuery } from "@/features/auth.api";
import RootLayout from "@/layout";
import GenericLoadingSkeleton from "@/skeleton";
import PageMetadata from "@/utils/PageMetadata";
import { ReactElement } from "react";

export default function HomePage() {
  const { data: userData, isLoading } = useGetLoggedInUserQuery({});
  const user = userData?.data;
  return (
    <>
      <PageMetadata
        title={`${isLoading ? "Loading..." : user?.id ? "Home" : "Login"}`}
        description="this is admin dashboard home page"
        keywords="home, Rubel, Ahmed, Rana"
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>{user?.email ? <Home /> : <Login />}</>
      )}
    </>
  );
}

HomePage.getLayout = function (page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
