import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { db } from "../config/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export const requestApi = createApi({
    reducerPath: "requestApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["request"],
    endpoints: (builder) => {
        return {
            getRequest: builder.query({
                queryFn: async () => {
                    try {
                        const requestRef = collection(db, "request");
                        const result = await getDocs(requestRef);
                        const filtered = result.docs.map(item => ({
                            ...item.data(),
                            id: item.id
                        }));
                        return { data: filtered };
                    } catch (error) {
                        console.log(error);
                        return { error: error.message };
                    }
                },
                providesTags: ["request"]
            }),
            addRequest: builder.mutation({
                queryFn: async requestData => {
                    try {
                        const requestRef = collection(db, "request");
                        const result = await addDoc(requestRef, requestData);

                        return "Request create success";
                    } catch (error) {
                        console.log(error);
                        return { error: error.message };
                    }
                },
                invalidatesTags: ["request"]
            }),

            deleteRequest: builder.mutation({
                queryFn: async id => {
                    try {
                        const requestRef = doc(db, "request", id);
                        const result = await deleteDoc(requestRef);

                        return "Requested delete success";
                    } catch (error) {
                        console.log(error);
                        return { error: error.message };
                    }
                },
                invalidatesTags: ["request"]
            }),
        };
    }
});

export const { useGetRequestQuery, useAddRequestMutation, useDeleteRequestMutation } = requestApi;

// Export the entire API
export default requestApi;
