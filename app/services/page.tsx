/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import React from "react";
import { IService } from "../types/service.type";
import Link from "next/link";
import { getServiceData } from "../apis/service.api";

export async function generateMetadata() {
  const projects = (await getServiceData()) as IService[];

  return {
    title: "Services: Md Rubel Ahmed Rana",
    description: projects
      .map((project) => project.name)
      .join(",")
      .concat(projects.map((project) => project.description).join(",")),
  };
}

const Services = async () => {
  const services = (await getServiceData()) as IService[];
  return (
    <section className="bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto py-20 px-5 flex flex-col gap-10 ">
        <div>
          <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Quality Services
          </h3>
          <p className="text-center text-slate-500 text-xl font-sans mt-5">
            Transforming your ideas into captivating web projects that <br />
            inspire both you and your customers/clients
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3">
          {services.map((service) => (
            <div
              className="border bg-gray-100 p-5 shadow-md rounded-md  relative"
              key={service.id}
            >
              <div className="flex flex-col gap-3 mb-10 overflow-hidden">
                <div className="rounded-md w-full">
                  <img
                    className="rounded-md h-40 w-full transition duration-500 hover:scale-110"
                    src={
                      service.image ||
                      "https://i.ibb.co/ZdZ1R7V/image-Not-Found.png"
                    }
                    alt={service.name}
                  />
                </div>
                <h4 className="text-lg text-gray-700">{service.name}</h4>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
              <Link href={`/hire-me/${service.id}`}>
                <button
                  type="button"
                  className="bg-gradient-to-l from-purple-800 to-blue-500 hover:to-purple-800 hover:from-blue-500  text-white px-10 py-2 rounded-full absolute bottom-3"
                >
                  Hire Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
