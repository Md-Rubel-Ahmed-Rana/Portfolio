"use client";
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { IService } from "../types/service.type";
import { useTheme } from "next-themes";

const Card = dynamic(() => import("antd/lib/card"), { ssr: false });

type Props = {
  service: IService;
};

const ServiceCard = ({ service }: Props) => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Card
      key={service?.id}
      hoverable
      cover={
        <img
          alt={service?.name}
          className="h-40 lg:h-60 w-full object-cover"
          src={service?.image}
        />
      }
      className={`border-0 shadow-lg ${
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold mb-1">{service?.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {service?.description}
        </p>
      </div>
    </Card>
  );
};

export default ServiceCard;
