import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const formula1api = "https://formula1api.azurewebsites.net/api"
// const formula1api = "https://api.nobitches.win/f1api"
// const formula1api = "https://localhost:7047/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: formula1api,
        // credentials: 'include', 
        prepareHeaders: (headers) => {
            headers.set('x-api-key', 'golando4')
            headers.set('Content-Type', 'application/json')
            return headers
    }}),
    endpoints: (builder) => ({
        
        // Drivers

        getDrivers: builder.query({
            query: () => '/drivers',
            providesTags: ['Drivers']
        }),
        getDriverById: builder.query({
            query: (id) => '/drivers/' + id,
            providesTags: ['Driver']
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
        getTeamById: builder.query({
            query: (id) => '/teams/' + id,
            providesTags: ['Team']
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

export const { useGetDriversQuery, useAddDriverMutation, useUpdateDriverMutation, useDeleteDriverMutation, useGetTeamsQuery, useAddTeamMutation, useGetDriverByIdQuery, useGetTeamByIdQuery } = apiSlice