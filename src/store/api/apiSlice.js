import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const formula1api = "https://formula1api.azurewebsites.net/api"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: formula1api }),
    endpoints: (builder) => ({
        getDrivers: builder.query({
            query: () => '/drivers',
            providesTags: (result, error, driver) => [
                { type: 'Driver', id: 'driver.driverNumber' }
            ]
        }),
        addDriver: builder.mutation({
            invalidatesTags: (result, error, driver) => { return [{type: 'Driver', driverNumber: driver.driverNumber}]},
            query: (driver) => {
                return {
                    url: '/drivers',
                    method: 'POST',
                    driver,
                }
            }
        }),
        // TODO
        updateDriver: builder.mutation({
            invalidatesTags: (result, error, driver) => { return [{type: 'Driver', driverNumber: driver.driverNumber}]},
            query: (driver) => {
                return {
                    url: `/drivers/${driver.driverNumber}`,
                    method: 'PUT',
                    driver,
                }
            }
        }),
        // Delete
        deleteDriver: builder.mutation({
            invalidatesTags: (result, error, driver) => { return [{type: 'Driver', id: driver.driverNumber}]},
            query: (driver) => {
                return {
                    url: `/drivers/${driver.driverNumber}`,
                    method: 'DELETE'
                }
            }
        }),

        getTeams: builder.query({
            providesTags: (result, error, team) => [
                {type: 'Team', id: 'team.id'}
            ],
            query: () => '/teams'
        }),
        addTeam: builder.mutation({
            invalidatesTags: (result, error, team) => { return [{type: 'Team', id: team.id}]},
            query: (team) => {
                return {
                    url: '/teams',
                    method: 'POST',
                    team,
                }
            }
        }),
    })
})

export const { useGetDriversQuery, useAddDriverMutation, useUpdateDriverMutation, useDeleteDriverMutation, useGetTeamsQuery, useAddTeamMutation } = apiSlice