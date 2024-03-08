import { configureStore } from "@reduxjs/toolkit";
import { driverReducer, addDriver, removeDriver, changeSearchTerm } from "./slices/driverSlice";

const store = configureStore({
    reducer: {
        driver: driverReducer,
    }
})

export { store, addDriver, removeDriver, changeSearchTerm }