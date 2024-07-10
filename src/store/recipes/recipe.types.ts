export enum RECIPES_ACTION_TYPES {
  SET_RECENTLY_VIEWED = 'recipes/SET_RECENTLY_VIEWED',
  SET_RECENTLY_ADDED = 'recipes/SET_RECENTLY_ADDED',
  SET_CURRENT_CATEGORY = 'recipes/SET_CURRENT_CATEGORY',
  SET_RECIPE_BY_ID = 'recipes/SET_RECIPE_BY_ID',
  ADD_RECIPE = 'recipes/ADD_RECIPE',
  UPDATE_RECIPE = 'recipes/UPDATE_RECIPE',
  DELETE_RECIPE = 'recipes/DELETE_RECIPE',
  SEARCH_RECIPES = 'recipes/SEARCH_RECIPES',
  SET_FORM_FIELDS = 'recipes/SET_FORM_FIELDS'
}

export type CurrentCategory = string;

export type FormFields = {
  title: string;
  description: string;
  img: string;
  noOfPeople: number;
  time: number;
  difficulty: string;
  ingredients: { item: string; quantity: number; unit: string }[];
  instructions: string[];
};
