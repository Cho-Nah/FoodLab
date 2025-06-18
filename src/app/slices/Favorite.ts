// src/app/slices/favoriteSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: number;
  type: "filter" | "day" | "all" | "recipe";
  [key: string]: any; // Разрешаем любые другие поля
}

const initialState: FavoriteItem[] = [];

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addOrRemoveFavorite(state, action: PayloadAction<FavoriteItem>) {
      const recipe = action.payload;
      const existingIndex = state.findIndex(
        (item) => item.id === recipe.id && item.type === recipe.type
      );

      if (existingIndex >= 0) {
        state.splice(existingIndex, 1); // Удалить из избранного
      } else {
        state.push(recipe); // Добавить в избранное
      }
    },
  },
});

export const { addOrRemoveFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
