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
}
