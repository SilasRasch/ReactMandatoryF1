import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const formula1api = "https://formula1api.azurewebsites.net/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: formula1api }),
    endpoints: (builder) => ({
        getDrivers: builder.query({
            query: () => '/drivers',
            providesTags: (result, error, driver) => [
                { type: 'Driver', id: "DRIVER" }
            ]
        }),
        addDriver: builder.mutation({
            invalidatesTags: (result, error, driver) => { return [{type: 'Driver', driverNumber: driver.driverNumber}]},
            query: (body) => {
                return {
                    url: '/drivers',
                    method: 'POST',
                    body,
                }
            }
        }),
        // TODO
        updateDriver: builder.mutation({
            invalidatesTags: (result, error, driver) => { return [{type: 'Driver', driverNumber: driver.driverNumber}]},
            query: (body) => {
                return {
                    url: '/drivers/' + body.driver.driverNumber,
                    method: 'PUT',
                    body,
                }
            }
        })
        // Delete
    })
})

export const { useGetDriversQuery, useAddDriverMutation } = apiSlice