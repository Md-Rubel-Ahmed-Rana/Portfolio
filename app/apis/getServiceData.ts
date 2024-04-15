export const getServiceData = async () => {
  try {
    const res = await fetch(
      "https://portfolio-backend-v2-p89h.onrender.com/api/v2/service",
      {
        next: {
          revalidate: 10,
        },
      }
    );

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
