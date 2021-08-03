import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => {
                return '/api';
            }
        }),
    }),
});

export const { useGetProductsQuery } = productsApi;