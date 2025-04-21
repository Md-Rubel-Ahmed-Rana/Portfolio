/* eslint-disable @next/next/no-img-element */
import { IService } from "../types/service.type";
import { getServiceData } from "../apis/service.api";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("antd/lib/card"), {
  ssr: false,
});
const Meta = dynamic(() => import("antd/lib/card/Meta"), {
  ssr: false,
});

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Card
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              key={service?.id}
              hoverable
              cover={
                <img
                  alt={service?.name}
                  className="h-40 lg:h-60"
                  src={service?.image}
                />
              }
            >
              <Meta title={service?.name} description={service?.description} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
