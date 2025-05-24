import apiSlice from "@/redux/apiSlice";

const blogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        method: "GET",
        url: "/blog",
      }),
      providesTags: ["blog"],
    }),
    getBlogById: builder.query({
      query: ({ id }: { id: string }) => ({
        method: "GET",
        url: `/blog/single/${id}`,
      }),
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/blog/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    addNewBlog: builder.mutation({
      query: ({ blog }: { blog: FormData }) => ({
        url: `/blog/add-new-blog`,
        method: "POST",
        body: blog,
      }),
      invalidatesTags: ["blog"],
    }),
    editBlog: builder.mutation({
      query: ({ id, blog }: { id: string; blog: FormData }) => ({
        url: `/blog/update/${id}`,
        method: "PATCH",
        body: blog,
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useDeleteBlogMutation,
  useAddNewBlogMutation,
  useGetBlogByIdQuery,
  useEditBlogMutation,
} = blogApi;
