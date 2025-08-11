import { configureStore } from "@reduxjs/toolkit";
import clothesReducer from "../slices/clothesSlice";

export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
