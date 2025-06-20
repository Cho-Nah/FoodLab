export interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

export interface SendState {
  recipes: any[];
}

export interface FilterData {
  id: number;
  tags: string[];
  name: string;
  description: string;
  type: "filter";
}

export interface User {
  username: string;
  password: string;
  email: string;
}

export interface RecipeOfDay {
  id: number;
  title: string;
  info: string;
  // isFavorite: boolean;
  image?: string;
  steps: RecipeStep[];
  type: "day";
}

export interface AllRecipes {
  id: number;
  title: string;
  time: number;
  // isFavorite: false;
  info: string;
  steps: RecipeStep[];
  type: "all";
}

export interface RecipeStep {
  number: number;
  description: string;
  image: string;
}
