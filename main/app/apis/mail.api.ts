import { baseApi } from ".";
import { IMail } from "../types/mail.type";

export const sendMail = async (content: IMail) => {
  try {
    const res = await fetch(`${baseApi}/mail/send`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(content),
    });
    if (res.ok) {
      const result = await res.json();
      return result;
    }
  } catch (error) {
    console.error("Error sending mail:", error);
    throw new Error("Failed to sending mail. Please try again later.");
  }
};
