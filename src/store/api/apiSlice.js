import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const localApi = "http://localhost:3500"
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
                        /* {
                        "driverNumber": 1,
                        "name": "string",
                        "code": "string",
                        "country": "string",
                        "points": 0,
                        "championships": 0,
                        "portraitImgPath": "string",
                        "dateOfBirth": "2024-03-14",
                        "teamId": 1
                        } */
                }
            }
        })
    })
})

export const { useGetDriversQuery, useAddDriverMutation } = apiSlice