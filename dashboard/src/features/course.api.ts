import apiSlice from "@/redux/apiSlice";
import { ICreateCourse } from "@/types/course.type";

const courseApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => "/course",
      providesTags: ["course"],
    }),
    getCourseById: builder.query({
      query: ({ id }: { id: string }) => `/course/single/${id}`,
      providesTags: ["course"],
    }),
    addNewCourse: builder.mutation({
      query: ({ course }: { course: ICreateCourse }) => ({
        url: "/course/add-new-course",
        method: "POST",
        body: course,
      }),
      invalidatesTags: ["course"],
    }),
    updateCourse: builder.mutation({
      query: ({ id, course }: { id: string; course: ICreateCourse }) => ({
        url: `/course/update/${id}`,
        method: "PATCH",
        body: course,
      }),
      invalidatesTags: ["course"],
    }),
    deleteCourse: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/course/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["course"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useAddNewCourseMutation,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
} = courseApi;
