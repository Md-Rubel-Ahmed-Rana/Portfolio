import { useGetLoggedInUserQuery } from "@/features/auth.api";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Layout, Tooltip, Typography } from "antd/lib";
import Logout from "./Logout";

const { Header } = Layout;
const { Text } = Typography;

type Props = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const DashboardHeader = ({ collapsed, setCollapsed }: Props) => {
  const { data } = useGetLoggedInUserQuery({});
  const user = data?.data;

  return (
    <Header
      className="flex justify-between bg-white shadow-sm"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        width: "100%",
        padding: "0 16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{ fontSize: 20, width: 48, height: 48 }}
      />

      <div className="flex items-center gap-4 bg-white">
        {user && (
          <div className="flex items-center gap-3">
            <Avatar
              size="large"
              src={user?.image}
              icon={<UserOutlined />}
              alt={user?.name}
            />
            <div className="flex flex-col">
              <Text strong>{user?.name}</Text>
              <Badge
                count={user?.role.toUpperCase()}
                style={{ backgroundColor: "#1677ff" }}
              />
            </div>
          </div>
        )}

        <Tooltip title="Logout from system" placement="left">
          <Logout />
        </Tooltip>
      </div>
    </Header>
  );
};

export default DashboardHeader;
