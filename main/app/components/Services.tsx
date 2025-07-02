import { IService } from "../types/service.type";
import { getServiceData } from "../apis/service.api";
import ServiceCard from "./ServiceCard";

export default async function Services() {
  const services = ((await getServiceData()) || []) as IService[];
  return (
    <section className="dark:bg-gray-800 bg-white dark:text-gray-300">
      <div className="max-w-[1440px] w-full mx-auto py-20 px-5 flex flex-col gap-10 ">
        <div>
          <h3 className="font-semibold lg:text-4xl dark:text-gray-300 text-2xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Quality Services
          </h3>
          <p className="text-center text-slate-400 lg:text-xl text-lg font-sans mt-5">
            Transforming your ideas into captivating web projects that{" "}
            <br className="lg:block hidden" />
            inspire both you and your customers/clients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services?.map((service) => (
            <ServiceCard service={service} key={service?.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
