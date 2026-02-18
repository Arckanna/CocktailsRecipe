export interface CocktailIngredient {
  name: string;
  quantity?: string;
}

export interface Cocktail {
  name: string;
  img: string;
  description: string;
  tags?: string[];
  ingredients?: CocktailIngredient[];
  recipe?: string[];
}