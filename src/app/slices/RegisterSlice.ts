import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  password: string;
  email: string;
}

const initialState: User = {
  username: "",
  password: "",
  email: "",
};

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    RegisterForSaga: (state, action: PayloadAction<User>) => {},
    Register: (state, action: PayloadAction<User>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.email = action.payload.email;
    },
  },
});

export const { RegisterForSaga, Register } = RegisterSlice.actions;
export const registerReducer = RegisterSlice.reducer;
