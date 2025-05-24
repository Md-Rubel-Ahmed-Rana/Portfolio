/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRegisterUserMutation } from "@/features/auth.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Checkbox, Form, Input, Select } from "antd/lib";

const { Option } = Select;

const CreateUser = () => {
  const [register, { isLoading }] = useRegisterUserMutation();

  const handleCreateUser = async (values: any) => {
    await handleAsyncMutation(
      register,
      values,
      201,
      { error: "Failed to create user", success: "User create successfully" },
      "/users"
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-2xl text-black font-semibold mb-6 text-center">
        Create New User
      </h2>
      <Form
        layout="vertical"
        onFinish={handleCreateUser}
        initialValues={{ isVerified: false }}
        disabled={isLoading}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter the email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="example@mail.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter the password" }]}
        >
          <Input.Password placeholder="••••••••" />
        </Form.Item>

        <Form.Item label="Phone Number" name="phoneNumber">
          <Input placeholder="+1 123 456 7890" />
        </Form.Item>

        <Form.Item label="Role" name="role">
          <Select placeholder="Select a role">
            <Option value="Admin">Admin</Option>
            <Option value="Editor">Editor</Option>
            <Option value="Developer">Developer</Option>
            <Option value="User">User</Option>
          </Select>
        </Form.Item>

        <Form.Item name="isVerified" valuePropName="checked">
          <Checkbox>Is Verified?</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="w-full"
            disabled={isLoading}
            iconPosition="end"
            size="large"
          >
            {isLoading ? "Creating..." : "Create User"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
