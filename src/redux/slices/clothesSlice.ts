import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Clothes {
  id: number;
  name: string;
  email: string;
}

type ClothesState = { list: Clothes[]; loading: boolean; error: {} | null };

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

const initialState: ClothesState = { list: [], loading: false, error: null };

const usersSlice = createSlice({
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
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchClothes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unexpected error";
      });
  },
});

export const clothesReducer = usersSlice.reducer;
