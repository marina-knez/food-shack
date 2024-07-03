import { createSelector } from 'reselect';

const selectCategories = (state) => state.categories.categories;

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { categoryName, recipes } = category;
      acc[categoryName.toLowerCase()] = recipes;
      return acc;
    }, {})
);
