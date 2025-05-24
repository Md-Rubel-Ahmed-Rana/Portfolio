import apiSlice from "@/redux/apiSlice";
import { IPersonalInfo } from "@/types/home.type";

const homeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHomeData: builder.query({
      query: () => ({
        method: "GET",
        url: "/home",
      }),
      providesTags: ["home"],
    }),
    updateLogo: builder.mutation({
      query: ({ id, image }: { id: string; image: FormData }) => ({
        method: "PATCH",
        url: `/home/logo/update/${id}`,
        body: image,
      }),
      invalidatesTags: ["home"],
    }),
    updateBannerImage: builder.mutation({
      query: ({ id, image }: { id: string; image: FormData }) => ({
        method: "PATCH",
        url: `/home/banner-image/update/${id}`,
        body: image,
      }),
      invalidatesTags: ["home"],
    }),
    updateHome: builder.mutation({
      query: ({ id, data }: { id: string; data: IPersonalInfo }) => ({
        method: "PATCH",
        url: `/home/update/${id}`,
        body: data,
      }),
      invalidatesTags: ["home"],
    }),
  }),
});

export const {
  useGetHomeDataQuery,
  useUpdateLogoMutation,
  useUpdateBannerImageMutation,
  useUpdateHomeMutation,
} = homeApi;
