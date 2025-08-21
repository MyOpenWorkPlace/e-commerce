import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../types/types";

type AuthState = {
  users: User[];
  activeUser: User | null;
};

const initialState: AuthState = {
  users:
    (localStorage.getItem("users") &&
      JSON.parse(localStorage.getItem("users")!)) ||
    [],
  activeUser:
    (localStorage.getItem("activeUser") &&
      JSON.parse(localStorage.getItem("activeUser")!)) ||
    null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      state.activeUser = action.payload;
      localStorage.setItem("activeUser", JSON.stringify(state.activeUser));
    },
    logout: (state) => {
      state.activeUser = null;
      localStorage.setItem("activeUser", "");
    },

    addToCart: (state, action) => {
      if (state.activeUser!.cart.find((el) => el.id === action.payload.id)) {
        state.activeUser!.cart = state.activeUser!.cart.map((el) =>
          el.id === action.payload.id
            ? { ...el, amount: el.amount + action.payload.amount }
            : el
        );
      } else {
        state.activeUser!.cart.push(action.payload);
      }

      state.users = state.users.map((user) =>
        user.id === state.activeUser?.id ? state.activeUser : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("activeUser", JSON.stringify(state.activeUser));
    },

    removeToCart: (state, action) => {
      state.activeUser!.cart = state.activeUser!.cart.filter(
        (el) => +el.id !== +action.payload
      );

      state.users = state.users.map((user) =>
        user.id === state.activeUser?.id ? state.activeUser : user
      );

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("activeUser", JSON.stringify(state.activeUser));
    },

    clearCart: (state) => {
      console.log("aaa");

      state.activeUser!.cart = [];
      state.users = state.users.map((user) =>
        user.id === state.activeUser?.id ? state.activeUser : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("activeUser", JSON.stringify(state.activeUser));
    },
  },
});

export const { signUp, login, logout, addToCart, removeToCart, clearCart } =
  slice.actions;

export default slice.reducer;
