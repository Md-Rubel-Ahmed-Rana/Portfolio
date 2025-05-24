import { useGetServiceByIdQuery } from "@/features/service.api";
import GenericLoadingSkeleton from "@/skeleton";
import { IService } from "@/types/service.type";
import { useRouter } from "next/router";
import EditServiceForm from "./EditServiceForm";

const EditService = () => {
  const { query } = useRouter();
  const id = query?.id as string;
  const { data, isLoading } = useGetServiceByIdQuery({ id });
  const service = data?.data as IService;
  return (
    <>
      {isLoading ? (
        <GenericLoadingSkeleton />
      ) : (
        <EditServiceForm service={service} />
      )}
    </>
  );
};

export default EditService;
