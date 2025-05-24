import apiSlice from "@/redux/apiSlice";

const serviceApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "/service",
      providesTags: ["service"],
    }),
    getServiceById: builder.query({
      query: ({ id }: { id: string }) => `/service/single/${id}`,
      providesTags: ["service"],
    }),
    addNewService: builder.mutation({
      query: ({ service }: { service: FormData }) => ({
        url: "/service/add-new-service",
        method: "POST",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),
    updateService: builder.mutation({
      query: ({ id, service }: { id: string; service: FormData }) => ({
        url: `/service/update/${id}`,
        method: "PATCH",
        body: service,
      }),
      invalidatesTags: ["service"],
    }),
    deleteService: builder.mutation({
      query: ({ id }: { id: string }) => ({
        url: `/service/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["service"],
    }),
  }),
});

export const {
  useGetServicesQuery,
  useGetServiceByIdQuery,
  useAddNewServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
