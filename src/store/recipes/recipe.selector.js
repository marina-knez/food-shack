import { createSelector } from "reselect";

const selectRecipeReducer = (state) => state.recipes;

export const selectCurrentCategory = createSelector(
    [selectRecipeReducer],
    (recipes) => recipes.currentCategory
);

export const selectRecentlyViewed = createSelector(
    [selectRecipeReducer],
    (recipes) => Array.isArray(recipes.recentlyViewed) ? recipes.recentlyViewed : []
);

export const selectRecentlyAdded = createSelector(
    [selectRecipeReducer],
    (recipes) => recipes.recentlyAdded
);

export const selectFormFields = createSelector(
    [selectRecipeReducer],
    (recipes) => recipes.formFields
)