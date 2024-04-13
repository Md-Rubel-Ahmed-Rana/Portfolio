export const getServiceData = async () => {
  try {
    const res = await fetch("http://localhost:5002/api/v2/service");

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
