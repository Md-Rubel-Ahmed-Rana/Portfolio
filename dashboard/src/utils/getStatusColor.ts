const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "green";
    case "rejected":
      return "red";
    case "pending":
      return "orange";
    default:
      return "gray";
  }
};

export default getStatusColor;
