import { createSlice } from "@reduxjs/toolkit";

type User = {
  email: string;
  password: string;
  cart: { amount: number; id: number }[];
};

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

    ///////////////////////////////////////////////////////////

    addToCart: (state, action) => {
      console.log("aaa");

      state.users.map((user) => {
        if (
          user.email === state.activeUser?.email &&
          !user.cart.find((el) => action.payload.id === el.id)
        ) {
          console.log(user.email);
          console.log(state.activeUser?.email);
          console.log(user.cart);

          return { ...user, cart: user.cart.push(action.payload) };
        } else {
          return user;
        }
      });
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    removeToCart: (state) => {
      state.activeUser = null;
    },
    clearCart: (state) => {
      state.activeUser = null;
    },
  },
});

export const { signUp, login, logout, addToCart } = slice.actions;

export default slice.reducer;
