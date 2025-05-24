import { toast } from "react-toastify";

type alertTypes = "success" | "error" | "info" | "warning";

export const showAlertMessage = (type: alertTypes, message: string) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    type: type,
  });
};
