import { useGetLoggedInUserQuery } from "@/features/auth.api";
import {
  AppstoreOutlined,
  BookOutlined,
  BulbOutlined,
  CodeOutlined,
  CommentOutlined,
  HomeOutlined,
  IdcardOutlined,
  LoginOutlined,
  MessageOutlined,
  ProjectOutlined,
  ReadOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd/lib";
import Link from "next/link";
import LogoutButton from "../common/LogoutButton";

const { Sider } = Layout;

const items = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link href="/">Home</Link>,
  },
  {
    key: "personal-info",
    icon: <IdcardOutlined />,
    label: <Link href="/personal-info">Personal Info</Link>,
  },
  {
    key: "create-user",
    icon: <UserAddOutlined />,
    label: <Link href="/create-user">Create User</Link>,
  },
  {
    key: "services",
    icon: <AppstoreOutlined />,
    label: <Link href="/services">Services</Link>,
  },
  {
    key: "projects",
    icon: <ProjectOutlined />,
    label: <Link href="/projects">Projects</Link>,
  },
  {
    key: "experiences",
    icon: <BulbOutlined />,
    label: <Link href="/experiences">Experiences</Link>,
  },
  {
    key: "courses",
    icon: <BookOutlined />,
    label: <Link href="/courses">Courses</Link>,
  },
  {
    key: "skills",
    icon: <CodeOutlined />,
    label: <Link href="/skills">Skills</Link>,
  },
  {
    key: "feedbacks",
    icon: <MessageOutlined />,
    label: <Link href="/feedback">Feedbacks</Link>,
  },
  {
    key: "blogs",
    icon: <ReadOutlined />,
    label: <Link href="/blogs">Blogs</Link>,
  },
  {
    key: "comments",
    icon: <CommentOutlined />,
    label: <Link href="/comments">Comments</Link>,
  },
  {
    key: "signout",
    icon: <LoginOutlined />,
    label: <LogoutButton />,
  },
];

const AdminSidebar = () => {
  const { data: userData } = useGetLoggedInUserQuery({});
  const user = userData?.data;

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="min-h-screen shadow-md"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="h-16 flex flex-col items-center justify-center text-xl text-black font-bold border-b">
        <h2 className="text-lg font-semibold">{user?.name}</h2>
        <h6 className="text-sm text-gray-500">[{user?.role}]</h6>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["home"]}
        items={items}
        className="text-base"
      />
    </Sider>
  );
};

export default AdminSidebar;
