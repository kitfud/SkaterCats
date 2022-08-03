import { configureStore } from "@reduxjs/toolkit";
import skaterReducer from "./slices/skaterSlice";

export const store = configureStore({
    reducer: {
        skaters:skaterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch