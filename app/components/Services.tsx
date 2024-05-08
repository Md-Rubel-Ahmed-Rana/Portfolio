import { GoArrowLeft } from "react-icons/go";
import { getServiceData } from "../apis/getServiceData";
import { IService } from "../types/service.type";

export default async function Services() {
  const services = (await getServiceData()) as IService[];
  return (
    <section className="bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto py-20 px-5 flex flex-col gap-10 ">
        <div>
          <h3 className="font-semibold lg:text-4xl text-2xl text-center text-transparent bg-gradient-to-l to-[#8750f7] from-[#2a1454] bg-clip-text">
            My Quality Services
          </h3>
          <p className="text-center text-slate-500 lg:text-xl text-lg font-sans mt-5">
            Transforming your ideas into captivating web projects that{" "}
            <br className="lg:block hidden" />
            inspire both you and your customers/clients
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          {services.map((service: IService) => (
            <li
              className="transition border rounded-md shadow-md duration-1000 px-4 py-6 lg:border-b-2 hover:rounded-md lg:flex items-center gap-5 cursor-pointer hover:bg-purple-800 group"
              key={service.id}
            >
              <h5 className="lg:w-2/5 font-semibold lg:text-2xl text-xl text-transparent bg-gradient-to-r from-purple-800 to-sky-400 bg-clip-text group-hover:text-white relative z-20">
                {service.name}
              </h5>
              <p className="lg:text-lg lg:w-3/5 text-slate-600 group-hover:text-white relative z-20">
                {service.description}
              </p>
              <p className="lg:block hidden">
                <GoArrowLeft className="text-4xl transform transition-transform ease-out duration-1000 -rotate-45 group-hover:rotate-45 group-hover:text-white" />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
