export const rootApi = process.env.NEXT_PUBLIC_BASE_API as string;
export const localApi = "http://localhost:5002/api/v2";
export const authHeaders = {
  authorization: process.env.NEXT_PUBLIC_API_ACCESS_KEY as string,
};
