import { useDeleteProjectMutation } from "@/features/project.api";
import { IProject } from "@/types/project.type";
import { EditOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu } from "antd/lib";
import Link from "next/link";
import DeleteCardItemModal from "../common/DeleteCardItemModal";

type Props = {
  project: IProject;
};

const ProjectActions = ({ project }: Props) => {
  const handleMenuClick = () => {};

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          key: "edit",
          label: (
            <Link
              href={`/project/edit/${project?.id}?name=${
                project?.name
              }&subTitle=${project?.subTitle}&description=${
                project?.description
              }&features=${project?.features?.join("-")}`}
              className="text-sm w-full flex justify-center"
            >
              <EditOutlined />
            </Link>
          ),
        },
        {
          key: "delete",
          label: (
            <DeleteCardItemModal
              key={"delete"}
              itemId={project?.id}
              itemName={project?.name}
              itemCategory="project"
              useReduxMutation={useDeleteProjectMutation}
            />
          ),
        },
      ]}
      className="rounded-md shadow-md"
    />
  );

  return (
    <div className="inline-block">
      <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
        <Button
          type="text"
          icon={<MoreOutlined />}
          className="p-2 border-2 hover:bg-gray-100 transition"
          style={{ border: "2px solid blue" }}
        />
      </Dropdown>
    </div>
  );
};

export default ProjectActions;
