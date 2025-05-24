import { postToApi } from ".";
import { IHireMe } from "../types/hireMe.type";

export const sendHireMe = async (content: IHireMe) => {
  return await postToApi(`hire-me/send`, content);
};
