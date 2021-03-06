import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const api = '/api';

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