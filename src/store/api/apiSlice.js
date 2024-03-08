import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const localApi = "http://localhost:3500"
// const ergast = "http://ergast.com/api/f1/2024/drivers.json"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: localApi}),
    endpoints: (builder) => ({
        getDrivers: builder.query({
            query: () => '/drivers'
        })
    })
})

export const { useGetDriversQuery } = apiSlice