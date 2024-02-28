import { configureStore } from "@reduxjs/toolkit";
import listSlice from "@src/redux/listSlice";
import { listStorageMiddleware } from "@src/redux/LocalStorageMiddleware";

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listStorageMiddleware.middleware),
});
