"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiMui,
  SiAntdesign,
  SiTailwindcss,
  SiAxios,
  SiFramer,
} from "react-icons/si";

const techs = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-6xl text-[#000000]" />,
    color: "#000000",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-6xl text-[#000000]" />,
    color: "#000000",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-6xl text-[#47A248]" />,
    color: "#47A248",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl text-[#3178C6]" />,
    color: "#3178C6",
  },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-6xl text-[#0170FE]" />,
    color: "#0170FE",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-[#38B2AC]" />,
    color: "#38B2AC",
  },
  {
    name: "Axios",
    icon: <SiAxios className="text-6xl text-[#0078D4]" />,
    color: "#0078D4",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer className="text-6xl text-[#000000]" />,
    color: "#000000",
  },
];

const circleRadius = 200;
const centerX = 250;
const centerY = 250;

const Technologies: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-20">
      <h4 className="lg:text-4xl text-2xl text-gray-700 font-semibold text-center">
        Technologies
      </h4>
      <p className="text-center text-gray-600 mt-2">
        Discover the cutting-edge technologies <br /> driving my website&apos;s
        functionality.
      </p>

      <div className="lg:block hidden h-[500px] w-[500px] mx-auto my-10 relative">
        <motion.div
          className="absolute inset-0"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <svg width="100%" height="100%">
            <circle
              cx={centerX}
              cy={centerY}
              r={circleRadius}
              stroke="purple"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          {techs.map((tech, index) => {
            const angle = (index / techs.length) * 2 * Math.PI;
            const x = centerX + circleRadius * Math.cos(angle);
            const y = centerY + circleRadius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  color: tech.color,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                >
                  {tech.icon}
                </motion.div>
                <div>{tech.name}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {/* for mobile device  */}
      <div className="lg:hidden block p-5">
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          {techs.map((tech) => (
            <div
              className={`text-[${tech.color}] rounded-md  flex flex-col justify-center items-center border p-3`}
              key={Math.random()}
            >
              <p className="text-center">{tech.icon}</p>
              <span className="mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
