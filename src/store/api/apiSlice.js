import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const formula1api = "https://formula1api.azurewebsites.net/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: formula1api,
        // credentials: 'include', 
        prepareHeaders: (headers) => {
            headers.set('x-api-key', 'golando4')
            headers.set('Content-Type', 'application/json',)
            return headers
        }}),
    endpoints: (builder) => ({
        
        // Drivers

        getDrivers: builder.query({
            query: () => '/drivers',
            providesTags: ['Drivers']
        }),
        addDriver: builder.mutation({
            query: (driver) => {
                return {
                    url: '/drivers',
                    method: 'POST',
                    body: driver
                }
            },
            invalidatesTags: ['Drivers']
        }),
        updateDriver: builder.mutation({
            query: (driver) => {
                return {
                    url: `/drivers/${driver.driverNumber}`,
                    method: 'PUT',
                    body: driver
                }
            },
            invalidatesTags: ['Drivers']
        }),
        deleteDriver: builder.mutation({
            query: ({id}) => {
                return {
                    url: `/drivers/${id}`,
                    method: 'DELETE',
                    body: id
                }
            },
            invalidatesTags: ['Drivers']
        }),

        // Teams

        getTeams: builder.query({
            query: () => '/teams',
            providesTags: ['Teams']
        }),
        addTeam: builder.mutation({
            query: (team) => {
                return {
                    url: '/teams',
                    method: 'POST',
                    body: team
                }
            },
            invalidatesTags: ['Teams']
        }),
    })
})

export const { useGetDriversQuery, useAddDriverMutation, useUpdateDriverMutation, useDeleteDriverMutation, useGetTeamsQuery, useAddTeamMutation } = apiSlice