import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isAdmin: false,
        Permissions: []
    },

    reducers: {
        toggleAdmin(state, action) {
            state.isAdmin = !state.isAdmin
        }
    }
})

export const { toggleAdmin } = adminSlice.actions;
export const adminReducer = adminSlice.reducer;