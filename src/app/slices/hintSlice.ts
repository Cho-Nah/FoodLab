import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  ingredients: string[];
}

const initialState: SearchState = {
  ingredients: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    fetchIngredients: (state, action: PayloadAction<string>) => {},
    setIngredients: (state, action: PayloadAction<string[]>) => {
      state.ingredients = action.payload;
    },
  },
});

export const { fetchIngredients, setIngredients } = searchSlice.actions;
export default searchSlice.reducer;
