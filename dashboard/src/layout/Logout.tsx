/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLogoutMutation } from "@/features/auth.api";
import { showAlertMessage } from "@/utils/showAlertMessage";
import { Button } from "antd/lib";
import { FaSignOutAlt } from "react-icons/fa";

const Logout = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const response: any = await logout({});
      if (response?.data?.statusCode === 200) {
        showAlertMessage("success", response?.data?.message || "Logged out");
        window.location.replace("/");
      } else {
        showAlertMessage(
          "error",
          response?.data?.message ||
            response?.error?.data?.message ||
            "Failed to logout"
        );
      }
    } catch (error: any) {
      showAlertMessage(
        "error",
        error?.message || "There was a server side error occurred"
      );
    }
  };

  return (
    <Button
      disabled={isLoading}
      onClick={handleLogout}
      icon={<FaSignOutAlt />}
    />
  );
};

export default Logout;
