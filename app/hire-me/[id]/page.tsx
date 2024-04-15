import { getServiceData } from "@/app/apis/getServiceData";
import { IService } from "@/app/types/service.type";
import React from "react";

const HireMeForm = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h3 className="text-4xl font-bold text-gray-700 text-center">
        Upcoming...
      </h3>
    </div>
  );
};

export default HireMeForm;

export async function generateStaticParams() {
  const services = (await getServiceData()) as IService[];

  return services.map((service) => ({ id: service.id }));
}
