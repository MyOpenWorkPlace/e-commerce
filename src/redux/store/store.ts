import { configureStore } from "@reduxjs/toolkit";
import clothesReducer from "../slices/clothesSlice";
import authReducer from "../slices/authSlice";
import filteredItemsReducer from "../slices/filteredItemsSlice";

export const store = configureStore({
  reducer: {
    clothes: clothesReducer,
    auth: authReducer,
    filteredItems: filteredItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
