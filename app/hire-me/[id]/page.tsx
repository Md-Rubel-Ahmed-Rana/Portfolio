import { getServiceData, getSingleServiceData } from "@/app/apis/service.api";
import HiringForm from "@/app/components/HireForm";
import { IService } from "@/app/types/service.type";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = (await getSingleServiceData(params.id)) as IService;

  return {
    title: `Hire For-${service.name}`,
    description: service.description,
  };
}

const HireMeForm = async ({ params }: { params: { id: string } }) => {
  const service = (await getSingleServiceData(params.id)) as IService;
  return (
    <div className="flex justify-center flex-col items-center py-10">
      <h3 className="text-xl my-4 font-bold text-gray-700 text-center">
        {service.name}
      </h3>
      <HiringForm position={service.name} />
    </div>
  );
};

export default HireMeForm;

export async function generateStaticParams() {
  const services = (await getServiceData()) as IService[];

  return services.map((service) => ({ id: service.id }));
}
