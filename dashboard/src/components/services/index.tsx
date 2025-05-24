import { useGetServicesQuery } from "@/features/service.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IService } from "@/types/service.type";
import PageHeader from "../common/PageHeader";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { data, isLoading } = useGetServicesQuery({});
  const services = (data?.data || []) as IService[];
  return (
    <>
      <PageHeader
        total={services?.length || 0}
        title="Service"
        addNewPath="/add-new-service"
      />
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <>
          {services?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {services?.map((service) => (
                <ServiceCard key={service?.id} service={service} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Services;
