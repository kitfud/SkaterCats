import { configureStore } from "@reduxjs/toolkit";
import skaterReducer from "./slices/skaterSlice";
import userReducer from "./slices/userSlice"
import nftcontractReducer from "./slices/nftcontractSlice"

export const store = configureStore({
    reducer: {
        skaters:skaterReducer,
        user: userReducer,
        nftcontract:nftcontractReducer
        },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck: false})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch