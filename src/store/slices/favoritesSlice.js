import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        data: JSON.parse(localStorage.getItem('favoriteDrivers')) === null ? [] : JSON.parse(localStorage.getItem('favoriteDrivers')) // Data can never be null or undefined
    },

    reducers: {
        addFavoriteDriver(state, action) {
            state.data.push(action.payload)
        },
        removeFavoriteDriver(state, action) {
            state.data = state.data.filter((id) => { return id !== action.payload })
        }
    }
})

export const { addFavoriteDriver, removeFavoriteDriver } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;