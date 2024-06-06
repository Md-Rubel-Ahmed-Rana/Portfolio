import { fetchFromApi } from ".";
import { IService } from "../types/service.type";

export const getServiceData = async () => {
  return ((await fetchFromApi(`service`)) as IService[]) || [];
};

export const getSingleServiceData = async (id: string) => {
  return ((await fetchFromApi(`service/single/${id}`)) as IService) || {};
};
