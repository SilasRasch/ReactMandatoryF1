import { configureStore } from "@reduxjs/toolkit";
import { driverReducer, addDriver, removeDriver, changeSearchTerm } from "./slices/driverSlice";
import { apiSlice } from "./api/apiSlice";

const store = configureStore({
    reducer: {
        driver: driverReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export { store, addDriver, removeDriver, changeSearchTerm }