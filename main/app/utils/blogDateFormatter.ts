import { months } from "../constants/months";

const blogDateFormatter = (blogCreatedDate: Date) => {
  const date = new Date(blogCreatedDate);
  const day = date.getDate();
  const month = months[date.getMonth()].slice(0, 3);
  const year = date.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formats = {
    short: `${month} ${day}, ${year}`,
    large: date.toLocaleString("en-US", options),
  };
  return formats;
};

export default blogDateFormatter;
