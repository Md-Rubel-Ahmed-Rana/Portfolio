import apiSlice from "@/redux/apiSlice";
import { IFeedback } from "@/types/feedback.type";

const feedbackApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFeedbacks: builder.query({
      query: ({ filter = "all" }: { filter?: string }) => ({
        method: "GET",
        url: `/feedback/all?filter=${filter}`,
      }),
      providesTags: ["feedback"],
    }),
    deleteFeedback: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/feedback/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["feedback"],
    }),
    updateFeedback: builder.mutation({
      query: ({ id, updatedData }: { id: string; updatedData: IFeedback }) => ({
        url: `/feedback/update/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: ["feedback"],
    }),
  }),
});

export const {
  useGetAllFeedbacksQuery,
  useDeleteFeedbackMutation,
  useUpdateFeedbackMutation,
} = feedbackApi;
