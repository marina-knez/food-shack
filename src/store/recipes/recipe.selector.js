import { createSelector } from "reselect";

const selectRecipe = (state) => state.recipes;

export const selectCurrentCategory = createSelector(
    [selectRecipe],
    (recipes) => recipes.currentCategory
);

export const selectRecentlyViewed = createSelector(
    [selectRecipe],
    (recipes) => Array.isArray(recipes.recentlyViewed) ? recipes.recentlyViewed : []
);

export const selectRecentlyAdded = createSelector(
    [selectRecipe],
    (recipes) => recipes.recentlyAdded
);

export const selectFormFields = createSelector(
    [selectRecipe],
    (recipes) => recipes.formFields
)