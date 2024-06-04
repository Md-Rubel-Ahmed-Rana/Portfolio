import { IUpdate } from "../types/update.types";
import { rootApi } from "./rootApi";

export const getUpdateData = async () => {
  try {
    const res = await fetch(`${rootApi}/update`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const updates = (data.data as IUpdate[]) || [];
      return updates;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching update data:", error);
    throw new Error("Failed to fetch update data. Please try again later.");
  }
};
