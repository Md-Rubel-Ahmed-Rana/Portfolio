import { Empty } from "antd";

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

const DataNotFound = ({
  title = "No Data Found",
  description = "We couldn’t find what you were looking for. Please try again later or contact support.",
  className = "",
}: Props) => {
  return (
    <div
      className={`flex justify-center items-center min-h-[300px] p-4 ${className}`}
    >
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        }
      />
    </div>
  );
};

export default DataNotFound;
