/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLogoutMutation } from "@/features/auth.api";
import { showAlertMessage } from "@/utils/showAlertMessage";
import { Button } from "antd/lib";

const LogoutButton = () => {
  const [logOut, { isLoading }] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logOut({});
      showAlertMessage("success", "Logged out successfully!");
      window.location.replace("/");
    } catch (error) {
      showAlertMessage("error", "Failed to log out");
    }
  };
  return (
    <Button
      loading={isLoading}
      disabled={isLoading}
      iconPosition="end"
      onClick={handleLogout}
      type="text"
    >
      {isLoading ? "Wait..." : "Signout"}
    </Button>
  );
};

export default LogoutButton;
