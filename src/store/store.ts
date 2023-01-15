import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import { dataApi } from "./dataApi";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
