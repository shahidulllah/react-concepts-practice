import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  tagTypes: "Counter",
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
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

export const { useGetPostsQuery, useSetPostsMutation } = baseApi;
