import { baseApi } from "../baseApi/baseApi";

const counterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "",
    }),
    setPosts: builder.mutation({
      query: () => ({
        url: "",
        method: "POST",
        body: "",
      }),
      invalidatesTags: "Counter",
    }),
  }),
});

export const { useGetPostsQuery, useSetPostsMutation } = counterApi;
