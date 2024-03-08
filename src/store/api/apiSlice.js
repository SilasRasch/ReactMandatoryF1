export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500'}),
    endpoints: (builder) => ({
        getDrivers: builder.query({
            query: () => '/drivers'
        })
    })
})

export const { useGetDriversQuery } = apiSlice