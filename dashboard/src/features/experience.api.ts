import apiSlice from "@/redux/apiSlice";
import { ICreateExperience, IExperience } from "@/types/experience.type";

const experienceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExperiences: builder.query({
      query: () => "/experience",
      providesTags: ["experience"],
    }),
    getExperienceById: builder.query({
      query: ({ id }: { id: string }) => `/experience/single/${id}`,
      providesTags: ["experience"],
    }),
    addNewExperience: builder.mutation({
      query: ({ experience }: { experience: ICreateExperience }) => ({
        url: "/experience/add-new-experience",
        method: "POST",
        body: experience,
      }),
      invalidatesTags: ["experience"],
    }),
    updateExperience: builder.mutation({
      query: ({ id, experience }: { id: string; experience: IExperience }) => ({
        url: `/experience/update/${id}`,
        method: "PATCH",
        body: experience,
      }),
      invalidatesTags: ["experience"],
    }),
    deleteExperience: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/experience/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["experience"],
    }),
  }),
});

export const {
  useGetExperiencesQuery,
  useGetExperienceByIdQuery,
  useAddNewExperienceMutation,
  useUpdateExperienceMutation,
  useDeleteExperienceMutation,
} = experienceApi;
