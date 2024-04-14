export const getProjectDuration = (endDate: Date, startDate: Date) => {
  // Calculate the difference in milliseconds between the two dates
  const differenceMs =
    new Date(endDate)?.getTime() - new Date(startDate)?.getTime();

  // Convert the difference from milliseconds to days
  const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return `${days} days`;
};
