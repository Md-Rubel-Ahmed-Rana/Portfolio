import apiSlice from "@/redux/apiSlice";

const visitorApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVisitorUsers: builder.query({
      query: () => ({
        url: `/user-track`,
      }),
      providesTags: ["visitor"],
    }),
    deleteVisitor: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/user-track/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["visitor"],
    }),
  }),
});

export const { useGetVisitorUsersQuery, useDeleteVisitorMutation } = visitorApi;
