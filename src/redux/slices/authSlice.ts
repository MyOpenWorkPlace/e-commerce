import { createSlice } from "@reduxjs/toolkit";

type User = {
  email: string;
  password: string;
  cart?: number[];
  favorites?: number[];
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
  activeUser: null,
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
    },
    logout: (state) => {
      state.activeUser = null;
    },
  },
});

export const { signUp, login, logout } = slice.actions;

export default slice.reducer;
