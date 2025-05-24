import { fetchFromApi } from ".";
import { IUpdate } from "../types/update.types";

export const getUpdateData = async () => {
  return ((await fetchFromApi("update")) as IUpdate[]) || [];
};
