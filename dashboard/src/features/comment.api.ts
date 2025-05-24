import apiSlice from "@/redux/apiSlice";

const commentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllComments: builder.query({
      query: () => "/comment",
      providesTags: ["comment"],
    }),
    deleteComment: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/comment/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const { useGetAllCommentsQuery, useDeleteCommentMutation } = commentApi;
