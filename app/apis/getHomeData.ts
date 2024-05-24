import { IHome } from "../types/home.type";
import { rootApi } from "./rootApi";

export const getHomeData = async () => {
  try {
    const res = await fetch(`${rootApi}/home`, {
      next: {
        revalidate: 10,
      },
    });

    if (res.ok) {
      const data = await res.json();
      const homeData = data.data as IHome;
      return homeData;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching home data:", error);
    throw new Error("Failed to fetch home data. Please try again later.");
  }
};
