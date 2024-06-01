import { rootApi } from "./rootApi";

export const getServiceData = async () => {
  try {
    const res = await fetch(`${rootApi}/service`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching service data:", error);
    throw new Error("Failed to fetch service data. Please try again later.");
  }
};

export const getSingleServiceData = async (id: string) => {
  try {
    const res = await fetch(`${rootApi}/service/single/${id}`);
    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching service data:", error);
    throw new Error("Failed to fetch service data. Please try again later.");
  }
};
