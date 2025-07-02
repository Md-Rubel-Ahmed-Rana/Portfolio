import AdminSidebar from "@/components/sidebar";
import { useGetLoggedInUserQuery } from "@/features/auth.api";
import { Layout, Typography } from "antd/lib";

import React, { Suspense, useState } from "react";
import DashboardHeader from "./DashboardHeader";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
  maxWidth?: string;
};

const RootLayout = ({ children, maxWidth = "1400px" }: Props) => {
  const { data: userData } = useGetLoggedInUserQuery({});
  const user = userData?.data;
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Suspense
      fallback={
        <div className="grid h-screen place-items-center">
          <Typography.Title>Loading</Typography.Title>
        </div>
      }
    >
      <Layout hasSider>
        {user?.name && <AdminSidebar collapsed={collapsed} />}
        <Layout>
          <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content style={{ margin: 0, padding: 0, overflow: "initial" }}>
            <div className="flex flex-col flex-1">
              <main className={`w-full max-w-[${maxWidth}] mx-auto flex-1`}>
                {children}
              </main>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Suspense>
  );
};

export default RootLayout;
