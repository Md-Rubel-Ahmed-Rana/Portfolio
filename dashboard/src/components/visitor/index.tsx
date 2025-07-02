"use client";
import { useGetVisitorUsersQuery } from "@/features/visitor.api";
import { IVisitor } from "@/types/visitor.type";
import { Card, Spin } from "antd/lib";
import VisitorTable from "./VisitorTable";

const Visitors = () => {
  const { data, isLoading } = useGetVisitorUsersQuery({});
  const visitors = (data?.data || []) as IVisitor[];

  return (
    <div>
      <Card title="Website Visitors" bordered className="shadow-md">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <Spin size="large" />
          </div>
        ) : (
          <VisitorTable visitors={visitors} />
        )}
      </Card>
    </div>
  );
};

export default Visitors;
