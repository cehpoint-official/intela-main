import { createSlice } from "@reduxjs/toolkit";
import requestApi from "./requestApi";

const requestSlice = createSlice({
    name: "requestSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder
        // get
        .addMatcher(requestApi.endpoints.getRequest.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(requestApi.endpoints.getRequest.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.demorequest = payload
        })
        .addMatcher(requestApi.endpoints.getRequest.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })
        // add
        .addMatcher(requestApi.endpoints.addRequest.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(requestApi.endpoints.addRequest.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.demorequestadd = true
        })
        .addMatcher(requestApi.endpoints.addRequest.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })
        // delete
        .addMatcher(requestApi.endpoints.deleteRequest.matchPending, (state, { payload }) => {
            state.loading = true
        })
        .addMatcher(requestApi.endpoints.deleteRequest.matchFulfilled, (state, { payload }) => {
            state.loading = true
            state.demorequestDelete = true
        })
        .addMatcher(requestApi.endpoints.deleteRequest.matchRejected, (state, { payload }) => {
            state.loading = true
            state.error = payload
        })
})

export const { invalidate } = requestSlice.actions
export default requestSlice.reducer