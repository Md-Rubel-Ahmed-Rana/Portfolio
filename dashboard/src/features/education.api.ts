import apiSlice from "@/redux/apiSlice";
import { IEducation } from "@/types/education.type";

const educationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEducations: builder.query({
      query: () => "/education",
      providesTags: ["education"],
    }),
    getEducationById: builder.query({
      query: ({ id }: { id: string }) => `/education/${id}`,
      providesTags: ["education"],
    }),
    addNewEducation: builder.mutation({
      query: ({ education }: { education: IEducation }) => ({
        url: "/education",
        method: "POST",
        body: education,
      }),
      invalidatesTags: ["education"],
    }),
    updateEducation: builder.mutation({
      query: ({ id, education }: { id: string; education: IEducation }) => ({
        url: `/education/${id}`,
        method: "PUT",
        body: education,
      }),
      invalidatesTags: ["education"],
    }),
    deleteEducation: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/education/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["education"],
    }),
  }),
});

export const {
  useAddNewEducationMutation,
  useGetEducationsQuery,
  useGetEducationByIdQuery,
  useDeleteEducationMutation,
  useUpdateEducationMutation,
} = educationApi;
