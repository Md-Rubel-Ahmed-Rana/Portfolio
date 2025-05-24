import Sidebar from "@/components/sidebar";
import { useGetLoggedInUserQuery } from "@/features/auth.api";
import { Typography } from "antd/lib";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
  maxWidth?: string;
};

const RootLayout = ({ children, maxWidth = "1400px" }: Props) => {
  const { data: userData } = useGetLoggedInUserQuery({});
  const user = userData?.data;
  return (
    <Suspense
      fallback={
        <div className="grid h-screen place-items-center">
          <Typography.Title>Loading</Typography.Title>
        </div>
      }
    >
      <div className="flex min-h-screen bg-gray-50">
        {user?.email && <Sidebar />}

        <div className="flex flex-col flex-1">
          <main className={`w-full max-w-[${maxWidth}] mx-auto flex-1`}>
            {children}
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default RootLayout;
