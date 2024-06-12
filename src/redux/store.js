import { configureStore } from "@reduxjs/toolkit";
import requestApi from "./requestApi";
import requestSlice from "./requestSlice";


const reduxStore = configureStore({
    reducer: {
        [requestApi.reducerPath]: requestApi.reducer,
        request: requestSlice
    },
    middleware: defaultMiddleware => [...defaultMiddleware(), requestApi.middleware]
})

export default reduxStore