import { baseSliceAPI } from "../utils/api/baseSlice";
import GlobalDialogSlice from "./GlobalDialog";


import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [baseSliceAPI.reducerPath]: baseSliceAPI.reducer,
    globalDialogSlice: GlobalDialogSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseSliceAPI.middleware,
    ),
  devTools: process.env.NODE_ENV === "development",
});

export default store;
