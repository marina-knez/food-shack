import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { categoryName, recipes } = category;
      acc[categoryName.toLowerCase()] = recipes;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategories],
  (categories) => categories.isLoading
);