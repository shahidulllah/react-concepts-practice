import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
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
    }),
  }),
});

export const { useGetPostsQuery, useSetPostsMutation } = baseApi;
