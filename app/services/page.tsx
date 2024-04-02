import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

const servicesData = [
  {
    name: "Frontend Web Development with Reactjs",
    description:
      "Craft stunning and dynamic websites utilizing the power of React.js, along with seamless state management using Redux and a rich array of React.js ecosystem tools.",
  },
  {
    name: "Full-stack Web Development with Next.js",
    description:
      "Unlock the power of Next.js for building modern, server-rendered React applications with ease. Seamlessly integrate frontend and backend logic to create high-performance, SEO-friendly web applications with enhanced developer experience.",
  },
  {
    name: "Frontend Web Development with Vuejs",
    description:
      "Embark on a journey to create captivating web experiences with Vue.js, leveraging the simplicity of Vue.js paired with Vuex for efficient state management and a suite of Vue.js specialized tools.",
  },
  {
    name: "Backend Web Development with Nodejs/Expressjs",
    description:
      "Unleash the potential of Node.js and Express.js to construct robust and scalable server-side solutions, empowered by a wealth of related tools and libraries.",
  },
  {
    name: "Backend Web Development with Nestjs",
    description:
      "Elevate your backend development game with Nest.js, harnessing its modular, scalable architecture and a comprehensive suite of related tools to build high-performance server applications.",
  },
  {
    name: "Full Web Development with Reactjs/Nextjs/Vuejs Nodejs/Expressjs",
    description:
      "Experience the pinnacle of web development prowess by combining the strengths of React.js, Next.js, Vue.js, Node.js, and Express.js to craft full-stack solutions with unmatched performance, scalability, and versatility.",
  },
  {
    name: "Database management with MongoDB/Mongoose",
    description:
      "Master the art of database management using MongoDB and Mongoose, enabling seamless interaction with data through powerful querying, indexing, and schema-based modeling.",
  },
  {
    name: "Database management with MySQL/PostgresQL with Prisma/TypeORM",
    description:
      "Delve into the realm of relational databases with MySQL or PostgresQL, augmented by the elegance of Prisma or TypeORM for simplified ORM and database management, enabling seamless interaction with data entities.",
  },
];

export default function Services() {
  return (
    <div className="py-16 flex flex-col gap-10">
      <div>
        <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l from-blue-400 to-purple-900 bg-clip-text">
          My Quality Services
        </h3>
        <p className="text-center text-slate-500 text-xl font-sans mt-5">
          Transforming your ideas into captivating web projects that <br />
          inspire both you and your customers
        </p>
      </div>
      <ul className="flex flex-col">
        {servicesData.map((service, index) => (
          <li
            className="transition ease-out duration-300 p-4 border-b-2 rounded-md flex items-center gap-5 cursor-pointer bg-transparent bg-gradient-to-r hover:to-purple-800 hover:from-sky-500 hover:text-white group relative overflow-hidden"
            key={index}
          >
            <h5 className="font-semibold text-3xl text-transparent bg-gradient-to-r from-purple-800 to-sky-400 bg-clip-text w-full group-hover:text-white relative z-20">
              {service.name}
            </h5>
            <p className="text-xl w-full text-slate-600 group-hover:text-white relative z-20">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
