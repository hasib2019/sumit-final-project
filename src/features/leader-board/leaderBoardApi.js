/* eslint-disable no-undef */
import { apiSlice } from "../api/apiSlice";

export const leaderBoardApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getLeaderBoardData: builder.query({
            query: ()=>`/assignmentMark`
        }),
        getAssgnmentData: builder.query({
            query: ()=>`/assignments`
        })
    })
});

export const { useGetLeaderBoardDataQuery, useGetAssgnmentDataQuery } = leaderBoardApi