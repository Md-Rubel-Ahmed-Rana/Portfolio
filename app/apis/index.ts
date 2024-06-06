import { authHeaders, localApi, rootApi } from "./rootApi";

const baseUrl =
  process.env.NEXT_PUBLIC_ENV === "development"
    ? localApi
    : (rootApi as string);

console.log(process.env.NEXT_PUBLIC_ENV, baseUrl);

export const fetchFromApi = async (endpointRoute: string) => {
  try {
    const res = await fetch(`${baseUrl}/${endpointRoute}`, {
      headers: authHeaders,
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

export const postToApi = async (endpointRoute: string, data: any) => {
  try {
    const res = await fetch(`${baseUrl}/${endpointRoute}`, {
      headers: { ...authHeaders, "Content-type": "application/json" },
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
    console.error("Error posting data:", error);
    throw new Error("Failed to post data. Please try again later.");
  }
};
