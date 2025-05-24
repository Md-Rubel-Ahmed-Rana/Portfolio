import { useLoginUserMutation } from "@/features/auth.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd/lib";
import Link from "next/link";

const Login = () => {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const handleLogin = async (values: { email: string; password: string }) => {
    await handleAsyncMutation(
      loginUser,
      values,
      200,
      {
        success: "Login successful!",
        error: "Login failed!",
      },
      "/"
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
          ⚠️ HIGH SECURITY AREA ⚠️
        </h1>
        <p className="text-center text-sm text-red-500 mb-6">
          This is the CMS admin dashboard. Authorized personnel only. All
          actions are monitored.
        </p>

        <Form
          name="admin_login"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="admin@example.com"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <div className="my-2">
            <Link href="/auth/forget-password" className="text-blue-600">
              Forgot password?
            </Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="large"
              disabled={isLoading}
              loading={isLoading}
              iconPosition="end"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
