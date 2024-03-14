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
            query: (driver) => {
                return {
                    url: '/drivers',
                    method: 'POST',
                    body: {
                        driverNumber: driver.driverNumber,
                        name: driver.name,
                        code: driver.code,
                        country: driver.country,
                        points: driver.points,
                        championships: driver.championships,
                        portraitImgPath: driver.portraitImgPath,
                        dateOfBirth: driver.dateOfBirth,
                        teamId: driver.team,
                        team: []
                    }
                }
            }
        })
    })
})

export const { useGetDriversQuery, useAddDriverMutation } = apiSlice