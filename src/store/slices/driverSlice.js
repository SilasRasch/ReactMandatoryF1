import { createSlice } from "@reduxjs/toolkit";

const driverSlice = createSlice({
    name: 'driver',
    initialState: {
        searchTerm: '',
        data: []
    },

    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addDriver(state, action) {
            state.data.push(action.payload)
        },
        removeDriver(state, action) {
            state.data = state.data.filter((d) => { return d.id !== action.payload })
        }
    }
})

export const { changeSearchTerm, addDriver, removeDriver } = driverSlice.actions;
export const driverReducer = driverSlice.reducer;