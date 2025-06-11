import apiSlice from "@/redux/apiSlice";

const visitorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVisitorUsers: builder.query({
      query: () => ({
        url: `/user-track`,
      }),
      providesTags: ["visitor"],
    }),
  }),
});

export const { useGetVisitorUsersQuery } = visitorApi;
