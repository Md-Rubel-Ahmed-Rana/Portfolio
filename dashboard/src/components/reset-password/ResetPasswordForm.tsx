import { useResetPasswordMutation } from "@/features/user.api";
import handleAsyncMutation from "@/utils/catchReduxAsyncMutation";
import { Button, Form, Input } from "antd/lib";
import { useRouter } from "next/router";

const ResetPasswordForm = () => {
  const { query } = useRouter();
  const id = query.id as string;
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const handleResetPassword = async ({ password }: { password: string }) => {
    handleAsyncMutation(
      resetPassword,
      { id, password },
      200,
      {
        error: "Failed to reset password",
        success: "Password reset successfully",
      },
      "/login"
    );
  };
  return (
    <Form
      layout="vertical"
      className="space-y-4"
      onFinish={handleResetPassword}
    >
      <Form.Item
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
            message:
              "Please enter your new password at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character!",

            pattern:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          },
        ]}
      >
        <Input.Password placeholder="Enter your new password" className="p-2" />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords do not match!"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm your new password"
          className="p-2"
        />
      </Form.Item>

      <Form.Item>
        <Button
          disabled={isLoading}
          loading={isLoading}
          iconPosition="end"
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;
