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
  SolutionOutlined,
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
    key: "educations",
    icon: <SolutionOutlined />,
    label: <Link href="/educations">Educations</Link>,
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

type Props = {
  collapsed: boolean;
};

const AdminSidebar = ({ collapsed }: Props) => {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
        backgroundColor: "white",
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="bg-white"
    >
      <Menu theme="light" mode="inline" items={items} />
    </Sider>
  );
};

export default AdminSidebar;
