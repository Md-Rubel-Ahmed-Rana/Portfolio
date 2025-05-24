import apiSlice from "@/redux/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (data: { id: string; password: string }) => ({
        method: "POST",
        url: `/user/reset-password`,
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useResetPasswordMutation } = userApi;
