export const getSingleProjectData = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:5002/api/v2/project/single/${id}`
    );

    if (res.ok) {
      const data = await res.json();
      return data.data;
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching project data:", error);
    throw new Error("Failed to fetch project data. Please try again later.");
  }
};
