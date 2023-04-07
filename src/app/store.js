/* eslint-disable no-unused-vars */
import { configureStore, getDefaultMiddlewares } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authSliceReducer from '../features/auth/authSlice';
import videosSliceReducer from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    video:videosSliceReducer
  },
  devTools: process.env.NODE_ENV !=="production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
