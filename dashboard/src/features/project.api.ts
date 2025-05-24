import apiSlice from "@/redux/apiSlice";

const projectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "/project",
      providesTags: ["project"],
    }),
    getProjectById: builder.query({
      query: ({ id }: { id: string }) => `/project/single/${id}`,
      providesTags: ["project"],
    }),
    addNewProject: builder.mutation({
      query: ({ project }: { project: FormData }) => ({
        url: "/project/add-new-project",
        method: "POST",
        body: project,
      }),
      invalidatesTags: ["project"],
    }),
    updateProject: builder.mutation({
      query: ({ id, project }: { id: string; project: FormData }) => ({
        url: `/project/update/${id}`,
        method: "PATCH",
        body: project,
      }),
      invalidatesTags: ["project"],
    }),
    deleteProject: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/project/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useAddNewProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
