import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd/lib";
import Link from "next/link";

type Props = {
  total: number;
  title: string;
  addNewPath: string;
};

const PageHeader = ({ total, title, addNewPath }: Props) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md mb-2">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">
          {total} {title}s Available
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link href={addNewPath}>
          <Button
            type="primary"
            className="bg-blue-500 text-white px-4 py-2 rounded"
            size="large"
            icon={<PlusCircleOutlined />}
          >
            Add {title}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageHeader;
