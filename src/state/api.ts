import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create the API
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis" as const], // Use const assertion for tagTypes
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis" as const],
    }),
  }),
});

// Export the generated hook directly
export const { useGetKpisQuery } = api;
