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
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    changeItem: (state, action) => {
      state.value = state.value.map((el) => {
        if (el.id === action.payload.id) {
          el.value = action.payload.editValue;
        }
        return el;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, changeItem } = listSlice.actions;

export default listSlice.reducer;
