import { toast } from "react-toastify";

export const baseApi = process.env.NEXT_PUBLIC_BASE_API as string;

export const fetchFromApi = async (endpointRoute: string) => {
  try {
    const res = await fetch(`${baseApi}/${endpointRoute}`, {
      next: {
        revalidate: 60,
      },
    });

    if (res.ok) {
      const data = await res.json();
      return data?.data;
    } else {
      throw new Error(`API request failed with status ${res.status}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data. Please try again later.");
  }
};

export const postToApi = async <T>(endpointRoute: string, data: T) => {
  try {
    const res = await fetch(`${baseApi}/${endpointRoute}`, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error(`API request failed with status ${res.status}`);
    }
  } catch (error) {
    toast.error("Failed to post data. Please try again later.");
  }
};
