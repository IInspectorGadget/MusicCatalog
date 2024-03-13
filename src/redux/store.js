import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { listApi } from "./listApi";

export const store = configureStore({
  reducer: {
    [listApi.reducerPath]: listApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(listApi.middleware),
});

setupListeners(store.dispatch);

export default store;
