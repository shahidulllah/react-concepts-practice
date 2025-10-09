import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  tagTypes: "Counter",
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
});
