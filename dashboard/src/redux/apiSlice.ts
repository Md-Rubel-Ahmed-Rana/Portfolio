import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = process.env.NEXT_PUBLIC_BASE_API as string;

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
    credentials: "include",
  }),
  tagTypes: [
    "user",
    "project",
    "service",
    "blog",
    "comment",
    "feedback",
    "personal-info",
    "experience",
    "course",
    "home",
    "skill",
  ],
  endpoints: () => ({}),
});

export default apiSlice;
