import { fetchFromApi } from ".";

export const getHomeData = async () => {
  const homeData = await fetchFromApi(`home`);
  return homeData;
};
