export const countDays = (startDate: Date) => {
  const differenceMs = new Date().getTime() - new Date(startDate)?.getTime();
  const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
  return `${days} days ago`;
};
