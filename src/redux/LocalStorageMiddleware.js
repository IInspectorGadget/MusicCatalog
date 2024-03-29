import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addItem, changeItem, deleteItem, storageName as listStorage } from "@src/redux/listSlice";

export const listStorageMiddleware = createListenerMiddleware();

listStorageMiddleware.startListening({
  matcher: isAnyOf(addItem, changeItem, deleteItem),
  effect: (action, listenerApi) => localStorage.setItem(listStorage, JSON.stringify(listenerApi.getState().list.value)),
});
