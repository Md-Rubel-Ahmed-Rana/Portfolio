import type { Metadata } from "next";
import { GoArrowLeft } from "react-icons/go";
import { getServiceData } from "../apis/getServiceData";
import { IService } from "../types/service.type";

export const metadata: Metadata = {
  title: "Services: Md Rubel Ahmed Rana",
  description: "Md Rubel Ahmed Rana portfolio",
};

export default async function Services() {
  const services = (await getServiceData()) as IService[];
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-16 px-5 flex flex-col gap-10 ">
        <div>
          <h3 className="font-semibold text-4xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Quality Services
          </h3>
          <p className="text-center text-slate-500 text-xl font-sans mt-5">
            Transforming your ideas into captivating web projects that <br />
            inspire both you and your customers/clients
          </p>
        </div>
        <ul className="flex flex-col">
          {services.map((service: IService) => (
            <li
              className="transition ease-out duration-300 px-4 py-6 border-b-2 hover:rounded-md flex items-center gap-5 cursor-pointer bg-transparent bg-gradient-to-r hover:to-purple-800 hover:from-sky-500 hover:text-white group relative overflow-hidden"
              key={service.id}
            >
              <h5 className="w-2/5 font-semibold text-2xl text-transparent bg-gradient-to-r from-purple-800 to-sky-400 bg-clip-text group-hover:text-white relative z-20">
                {service.name}
              </h5>
              <p className="text-lg w-3/5 text-slate-600 group-hover:text-white relative z-20">
                {service.description}
              </p>
              <p>
                <GoArrowLeft className="text-4xl transform transition-transform ease-out duration-1000 -rotate-45 group-hover:rotate-45" />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
