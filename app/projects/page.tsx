/* eslint-disable @next/next/no-img-element */
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
    subTitle: "An online platform for buying and selling products.",
    thumbnail: "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
    images: [
      "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
      "image2.jpg",
      "image3.jpg",
    ],
    projectLength: {
      startDate: new Date("2023-01-01"),
      endDate: new Date("2023-06-30"),
    },
  },
  {
    name: "Mobile Task Manager App",
    subTitle: "An online platform for buying and selling products.",
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
    thumbnail: "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
    images: ["https://i.ibb.co/HNkF2T1/Time-Tracking.png", "image5.jpg"],
    projectLength: {
      startDate: new Date("2023-03-15"),
      endDate: null, // Project is still in progress
    },
  },
  {
    name: "Blog Website",
    subTitle: "An online platform for buying and selling products.",
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
    thumbnail: "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
    images: [
      "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
      "image7.jpg",
      "image8.jpg",
    ],
    projectLength: {
      startDate: new Date("2022-10-01"),
      endDate: new Date("2023-03-31"),
    },
  },
  {
    name: "Weather App",
    subTitle: "An online platform for buying and selling products.",
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
    thumbnail: "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
    images: ["https://i.ibb.co/HNkF2T1/Time-Tracking.png", "image10.jpg"],
    projectLength: {
      startDate: new Date("2023-02-01"),
      endDate: new Date("2023-04-30"),
    },
  },
  {
    name: "Expense Tracker App",
    subTitle: "An online platform for buying and selling products.",
    description: "A mobile application for tracking expenses and budgeting.",
    features: ["Expense logging", "Budget management", "Graphical analysis"],
    techStack: "Flutter, SQLite",
    sourceCode: "https://github.com/example/expense-tracker",
    liveLink: "",
    projectStatus: "In Progress",
    category: "Mobile App Development",
    thumbnail: "https://i.ibb.co/HNkF2T1/Time-Tracking.png",
    images: ["https://i.ibb.co/HNkF2T1/Time-Tracking.png", "image12.jpg"],
    projectLength: {
      startDate: new Date("2023-01-15"),
      endDate: null, // Project is still in progress
    },
  },
];

export default function Projects() {
  return (
    <section className="max-w-[1440px] w-full mx-auto py-16 px-5 flex flex-col gap-10">
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
      <div>
        <ProjectSort />
        <div className="grid grid-cols-3 gap-5 mt-10">
          {projectsData.map((project) => {
            const { thumbnail, name, category, subTitle } = project;
            return (
              <div
                className="border shadow-lg w-full h-full rounded-lg relative group"
                key={Math.random()}
              >
                <img
                  className="w-full h-full rounded-lg"
                  src={thumbnail}
                  alt="project  image"
                />
                <div className="w-full absolute animate__animated animate__fadeInUp hidden group-hover:block bottom-0 bg-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] rounded-lg text-white p-5">
                  <h3>{name}</h3>
                  <span> # {category}</span>
                  <p>{subTitle}</p>
                  <hr />
                  <div className="flex justify-between mt-4">
                    <button className="bg-white w-full text-[#8750f7] bg-transparent hover:text-white hover:bg-[#2a1454] transition duration-300 ease-in-out px-4 py-2 rounded-md mr-2">
                      Source code
                    </button>
                    <button className="bg-white w-full text-[#8750f7] hover:text-white hover:bg-[#8750f7] transition duration-300 ease-in-out px-4 py-2 rounded-md">
                      Live preview
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
