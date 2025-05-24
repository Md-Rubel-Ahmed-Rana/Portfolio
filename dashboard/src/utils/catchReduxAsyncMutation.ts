/* eslint-disable @typescript-eslint/no-explicit-any */
import { showAlertMessage } from "./showAlertMessage";

type CustomMessage = {
  error?: string;
  success?: string;
};

const handleAsyncMutation = async <T>(
  reduxMutationFunction: (
    payload: T
  ) => Promise<{ data?: any; error?: any; message?: string }>,
  payload: T,
  successStatusCode: number,
  customMessage: CustomMessage = {
    error: "Failed to complete the operation",
    success: "Operation has been successful!",
  },
  successRedirect: string
): Promise<void> => {
  try {
    const response = await reduxMutationFunction(payload);
    if (response?.data?.statusCode === successStatusCode) {
      showAlertMessage(
        "success",
        response?.data?.message || response?.message || customMessage?.success
      );
      window.location.replace(successRedirect);
    } else {
      showAlertMessage(
        "error",
        response?.error?.data?.message ||
          response?.error?.message ||
          response?.data?.error?.message ||
          customMessage?.error
      );
    }
  } catch (error: any) {
    showAlertMessage(
      "error",
      error?.message ||
        error?.error?.data?.message ||
        error?.data?.error?.message ||
        customMessage?.error
    );
  }
};

export default handleAsyncMutation;
