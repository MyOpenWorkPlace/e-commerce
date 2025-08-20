import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Clothes } from "../../types/types";

type ClothesState = { list: Clothes[]; loading: boolean; error: {} | null };

const initialState: ClothesState = { list: [], loading: true, error: null };

export const fetchClothes = createAsyncThunk(
  "clothes/fetchClothes",
  async () => {
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/c/4548-4aa9-43ad-8506"
      );
      return data;
    } catch (error) {
      return String(error);
    }
  }
);

const slice = createSlice({
  name: "clothes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClothes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClothes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchClothes.rejected, (state, action) => {
        state.error = action.payload ?? "Unexpected error";
        state.loading = false;
      });
  },
});

export default slice.reducer;
