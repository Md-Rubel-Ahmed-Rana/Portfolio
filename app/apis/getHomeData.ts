export const getHomeData = async () => {
  try {
    const res = await fetch("http://localhost:5002/api/v2/util", {
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
    console.error("Error fetching home data:", error);
    throw new Error("Failed to fetch home data. Please try again later.");
  }
};
