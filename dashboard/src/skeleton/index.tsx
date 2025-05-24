import { Skeleton } from "antd/lib";

const GenericLoadingSkeleton = () => {
  return (
    <div className="lg:p-10 p-5 flex flex-col gap-5">
      <Skeleton active paragraph={{ rows: 5 }} />
      <Skeleton active paragraph={{ rows: 5 }} />
      <Skeleton active paragraph={{ rows: 5 }} />
    </div>
  );
};

export default GenericLoadingSkeleton;
