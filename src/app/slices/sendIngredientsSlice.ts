import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SendState } from "../types";

const initialState: SendState = {
  recipes: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    sendIngredients: (state, action: PayloadAction<string>) => {},
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
  },
});

export const { sendIngredients, setRecipes } = searchSlice.actions;
export default searchSlice.reducer;
