import apiSlice from "@/redux/apiSlice";
import { ICreateUser } from "@/types/user.type";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoggedInUser: builder.query({
      query: () => ({
        method: "GET",
        url: "/auth",
      }),
      providesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: ({ email, password }: { email: string; password: string }) => ({
        method: "POST",
        url: "/auth/login",
        body: { email, password },
      }),
      invalidatesTags: ["user"],
    }),
    forgetPassword: builder.mutation({
      query: ({ email }: { email: string }) => ({
        method: "POST",
        url: "/auth/forget-password",
        body: { email },
      }),
      invalidatesTags: ["user"],
    }),
    verifyResetToken: builder.query({
      query: ({ token }: { token: string }) => ({
        method: "GET",
        url: `/auth/verify-reset-password-token?token=${token}`,
      }),
      providesTags: ["user"],
    }),
    registerUser: builder.mutation({
      query: (data: ICreateUser) => ({
        method: "POST",
        url: `/auth/register`,
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    logout: builder.mutation({
      query: () => ({
        method: "DELETE",
        url: `/auth/logout`,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetLoggedInUserQuery,
  useLoginUserMutation,
  useForgetPasswordMutation,
  useVerifyResetTokenQuery,
  useRegisterUserMutation,
  useLogoutMutation,
} = authApi;
