import { createSlice } from "@reduxjs/toolkit";

export const storageName = "MusicList";

const initialState = {
  value: JSON.parse(localStorage.getItem(storageName)) || [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
    },
    changeItem: (state, action) => {
      state.value = state.value.map((el) => {
        return el.id === action.payload.id ? action.payload : el;
      });
    },
  },
});

export const { addItem, deleteItem, changeItem } = listSlice.actions;

export default listSlice.reducer;
