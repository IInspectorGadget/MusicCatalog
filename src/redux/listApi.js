import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["List"],
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "music",
      providesTags: ["List"],
    }),
    getItemById: builder.query({
      query: (id) => `music/${id}`,
    }),
    addItem: builder.mutation({
      query: (newItem) => ({
        url: "music",
        method: "POST",
        body: newItem,
      }),
      invalidatesTags: ["List"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `music/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["List"],
    }),
    updateItem: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: `music/${id}`,
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["List"],
    }),
  }),
});

export const { useGetItemsQuery, useGetItemByIdQuery, useAddItemMutation, useDeleteItemMutation, useUpdateItemMutation } = listApi;
