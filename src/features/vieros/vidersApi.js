/* eslint-disable no-undef */
import { apiSlice } from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getvideosData: builder.query({
            query: ()=>`/videos`
        })
    })
});

export const { useGetvideosDataQuery } = videosApi