import { createSlice } from "@reduxjs/toolkit";
import type { Clothes } from "../../types/types";

type FilteredItemsState = {
  filteredItems: Clothes[];
};

const initialState: FilteredItemsState = {
  filteredItems: [],
};

const slice = createSlice({
  name: "filteredItems",
  initialState,
  reducers: {
    updateItems: (state, action) => {
      state.filteredItems = action.payload;
    },
  },
});

export const { updateItems } = slice.actions;

export default slice.reducer;
