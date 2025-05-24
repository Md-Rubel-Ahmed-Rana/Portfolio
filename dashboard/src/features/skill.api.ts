import apiSlice from "@/redux/apiSlice";
import { IAddSkill, ISkill } from "@/types/home.type";

const skillApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query({
      query: () => "/skill",
      providesTags: ["skill"],
    }),
    addNewSkill: builder.mutation({
      query: ({ skills }: { skills: IAddSkill[] }) => ({
        url: "/skill/add-new-skill",
        method: "POST",
        body: skills,
      }),
      invalidatesTags: ["skill"],
    }),
    updateSkill: builder.mutation({
      query: ({ id, skill }: { id: string; skill: ISkill }) => ({
        url: `/skill/update/${id}`,
        method: "PATCH",
        body: skill,
      }),
      invalidatesTags: ["skill"],
    }),
    deleteSkill: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/skill/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useGetSkillsQuery,
  useAddNewSkillMutation,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
} = skillApi;
