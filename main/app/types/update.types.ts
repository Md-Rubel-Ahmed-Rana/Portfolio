export type IUpdate = {
  id: string;
  title: string;
  description: string;
  category: "Feature" | "Bug Fix" | "Improvement";
  isLive: boolean;
  status: "Planned" | "In Progress" | "Completed" | "Delayed";
  priority: "Low" | "Medium" | "High" | "Critical";
};
