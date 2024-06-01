import { IHireMe } from "../types/hireMe.type";
import { rootApi } from "./rootApi";

export const sendHireMe = async (content: IHireMe) => {
  try {
    const res = await fetch(`${rootApi}/hire-me/send`, {
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
    console.error("Error sending hire me:", error);
    throw new Error("Failed to sending hire me. Please try again later.");
  }
};
