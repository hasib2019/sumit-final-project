/* eslint-disable no-undef */
import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizData: builder.query({
            query: ()=>`/quizzes?id=1`
        })
    })
});

export const { useGetQuizDataQuery } = quizApi