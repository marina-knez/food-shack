import { createSelector } from "reselect";
import { RecipesState } from "./recipe.reducer";
import { RootState } from '../store';

const selectRecipeReducer = (state: RootState): RecipesState => state.recipes;

export const selectCurrentCategory = createSelector(
  [selectRecipeReducer],
  (recipes) => recipes.currentCategory
);

export const selectRecentlyViewed = createSelector(
  [selectRecipeReducer],
  (recipes) => recipes.recentlyViewed
);

export const selectRecentlyAdded = createSelector(
  [selectRecipeReducer],
  (recipes) => recipes.recentlyAdded
);

export const selectFormFields = createSelector(
  [selectRecipeReducer],
  (recipes) => recipes.formFields
);
