import type { Metadata } from "next";
import ProjectSort from "../components/ProjectSort";

export const metadata: Metadata = {
  title: "Projects: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const projectsData = [
  {
    name: "Ecommerce Website",
    description: "An online platform for buying and selling products.",
    features: [
      "User authentication",
      "Product search",
      "Shopping cart",
      "Payment gateway",
    ],
    techStack: "React, Node.js, Express, MongoDB",
    sourceCode: "https://github.com/example/ecommerce",
    liveLink: "https://www.example.com",
    projectStatus: "Completed",
    category: "Web Development",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    projectLength: {
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-06-30"),
    },
  },
  {
    name: "Mobile Task Manager App",
    description: "A mobile application for managing tasks and to-do lists.",
    features: [
      "Task creation",
      "Task categorization",
      "Reminders",
      "Sync across devices",
    ],
    techStack: "React Native, Firebase",
    sourceCode: "https://github.com/example/task-manager",
    liveLink: "",
    projectStatus: "In Progress",
    category: "Mobile App Development",
    images: ["image4.jpg", "image5.jpg"],
    projectLength: {
      startDate: new Date("2023-03-15"),
      endDate: null, // Project is still in progress
    },
  },
  {
    name: "Blog Website",
    description: "A platform for sharing articles and blog posts.",
    features: [
      "User registration",
      "Article creation",
      "Commenting system",
      "Search functionality",
    ],
    techStack: "Django, PostgreSQL, HTML, CSS",
    sourceCode: "https://github.com/example/blog",
    liveLink: "https://blog.example.com",
    projectStatus: "Completed",
    category: "Web Development",
    images: ["image6.jpg", "image7.jpg", "image8.jpg"],
    projectLength: {
      startDate: new Date("2022-10-01"),
      endDate: new Date("2023-03-31"),
    },
  },
  {
    name: "Weather App",
    description: "A web application for checking weather forecasts.",
    features: [
      "Location-based weather updates",
      "Multiple-day forecast",
      "Weather alerts",
    ],
    techStack: "Vue.js, OpenWeatherMap API",
    sourceCode: "https://github.com/example/weather-app",
    liveLink: "https://weather.example.com",
    projectStatus: "Completed",
    category: "Web Development",
    images: ["image9.jpg", "image10.jpg"],
    projectLength: {
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-04-30"),
    },
  },
  {
    name: "Expense Tracker App",
    description: "A mobile application for tracking expenses and budgeting.",
    features: ["Expense logging", "Budget management", "Graphical analysis"],
    techStack: "Flutter, SQLite",
    sourceCode: "https://github.com/example/expense-tracker",
    liveLink: "",
    projectStatus: "In Progress",
    category: "Mobile App Development",
    images: ["image11.jpg", "image12.jpg"],
    projectLength: {
      startDate: new Date("2023-01-15"),
      endDate: null, // Project is still in progress
    },
  },
];

export default function Projects() {
  return (
    <section className="py-16 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#9272d3] from-[#2a1454] bg-clip-text">
          My Recent Works
        </h3>
        <p className="text-center text-slate-500 text-xl font-sans mt-5">
          Presenting a curated selection of my latest projects, crafted to
          <br />
          impress and inspire both you and your potential clients
        </p>
      </div>
      <div className="w-2/5 mx-auto">
        <ProjectSort />
      </div>
    </section>
  );
}
