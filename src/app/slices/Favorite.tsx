import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeOfDay } from "../types";

const initialState: RecipeOfDay[] = [];

const FavoriteSlice = createSlice({
  name: "FavoriteRecipe",
  initialState,
  reducers: {
    addOrRemoveFavorite(state, action: PayloadAction<RecipeOfDay>) {
      const index = state.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      if (index !== -1) {
        state.splice(index, 1);
      } else {
        state.push({ ...action.payload, isFavorite: true });
      }
    },

    addOrRemoveFavoriteForSaga(state, action: PayloadAction<RecipeOfDay>) {},
  },
});

export const { addOrRemoveFavorite, addOrRemoveFavoriteForSaga } =
  FavoriteSlice.actions;
export default FavoriteSlice.reducer;
