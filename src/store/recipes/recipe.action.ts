import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { RECIPES_ACTION_TYPES, FormFields, CurrentCategory } from "./recipe.types";
import {
  getCategoriesAndDocuments,
  createRecipeDocument,
  updateRecipeDocument,
  deleteRecipeDocument,
  getRecipeDocumentById,
  searchRecipes
} from "../../utils/firebase/firebase.utils";
import { CategoryItem } from "../categories/category.types";

export type SetCurrentCategory = ActionWithPayload<RECIPES_ACTION_TYPES.SET_CURRENT_CATEGORY, CurrentCategory>;

export type SetRecentlyViewed = ActionWithPayload<RECIPES_ACTION_TYPES.SET_RECENTLY_VIEWED, CategoryItem[]>;

export type SetRecentlyAdded = ActionWithPayload<RECIPES_ACTION_TYPES.SET_RECENTLY_ADDED, CategoryItem[]>;

export type SetFormFields = ActionWithPayload<RECIPES_ACTION_TYPES.SET_FORM_FIELDS, FormFields>;

export const setCurrentCategory = withMatcher((category: CurrentCategory) =>
  createAction(RECIPES_ACTION_TYPES.SET_CURRENT_CATEGORY, category));

export const setRecentlyViewed = withMatcher((recentlyViewed: CategoryItem[]) =>
  createAction(RECIPES_ACTION_TYPES.SET_RECENTLY_VIEWED, recentlyViewed));

export const setRecentlyAdded = withMatcher((recentlyAdded: CategoryItem[]) =>
  createAction(RECIPES_ACTION_TYPES.SET_RECENTLY_ADDED, recentlyAdded));

export const setFormFields = withMatcher((formFields: FormFields) =>
  createAction(RECIPES_ACTION_TYPES.SET_FORM_FIELDS, formFields));

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;

// Fetch recently added recipes
export const fetchRecentlyAddedRecipes = (): ThunkResult<void> => async (dispatch) => {
  try {
    const categories = await getCategoriesAndDocuments();

    if (!categories || categories.length === 0) {
      throw new Error('No categories or categories contain no recipes');
    }

    const allRecipes = categories.flatMap(category => category.recipes);

    const sortedByDateAdded = allRecipes
      .filter(recipe => recipe.dateAdded)
      .sort((a, b) => b.dateAdded!.getTime() - a.dateAdded!.getTime());

    dispatch(setRecentlyAdded(sortedByDateAdded.slice(0, 4)));
  } catch (error) {
    console.error('Failed to fetch recently added recipes:', error);
  }
};


// Add a recipe to recently viewed
export const addRecentlyViewed = (recipeTitle: string): ThunkResult<void> => (dispatch, getState) => {
  const state = getState();
  const categoriesArray = state.categories.categories;
  const recentlyViewed = state.recipes.recentlyViewed;

  const categoryObject = categoriesArray.find(category =>
    category.recipes.some(recipe => recipe.title === recipeTitle)
  );

  if (!categoryObject) {
    const updatedRecentlyViewed = recentlyViewed.filter(r => r.title !== recipeTitle);
    dispatch(setRecentlyViewed(updatedRecentlyViewed));
    console.log(`Recipe with title "${recipeTitle}" was deleted or not found.`);
    return;
  }

  const recipe = categoryObject.recipes.find(recipe => recipe.title === recipeTitle);

  if (!recipe) {
    const updatedRecentlyViewed = recentlyViewed.filter(r => r.title !== recipeTitle);
    dispatch(setRecentlyViewed(updatedRecentlyViewed));
    console.log(`Recipe with title "${recipeTitle}" was deleted or not found.`);
    return;
  }

  const updatedRecentlyViewed = [{
    ...recipe,
    category: categoryObject.categoryName.toLowerCase()
  }, ...recentlyViewed.filter(r => r.title !== recipeTitle)].slice(0, 4);

  dispatch(setRecentlyViewed(updatedRecentlyViewed));
  console.log('Dispatching updated recentlyViewed:', updatedRecentlyViewed);
};

// Add a new recipe
export const addRecipe = (currentCategory: CurrentCategory | string, recipeData: CategoryItem): ThunkResult<void> => async (dispatch) => {
  if (currentCategory) {
    try {
      const categoryName = typeof currentCategory === 'string' ? currentCategory : currentCategory;

      await createRecipeDocument(categoryName, recipeData);
      dispatch(fetchRecentlyAddedRecipes());
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  } else {
    console.error('Current category is not set');
  }
};


// Update an existing recipe
export const updateRecipe = (categoryName: CurrentCategory, recipeData: CategoryItem): ThunkResult<void> => async (dispatch) => {
  try {
    await updateRecipeDocument(categoryName, recipeData);
    dispatch(fetchRecentlyAddedRecipes());
  } catch (error) {
    console.error(`Error updating recipe in category ${categoryName}:`, error);
  }
};


// Delete a recipe
export const deleteRecipe = (categoryName: CurrentCategory, recipeId: number): ThunkResult<void> => async (dispatch) => {
  try {
    await deleteRecipeDocument(categoryName, recipeId);
    dispatch(fetchRecentlyAddedRecipes());
  } catch (error) {
    console.error(`Error deleting recipe with ID ${recipeId} in category ${categoryName}:`, error);
  }
};


// Get a recipe by its ID
export const getRecipeById = (categoryName: CurrentCategory, recipeId: number): ThunkAction<Promise<CategoryItem | undefined>, RootState, unknown, AnyAction> => async () => {
  try {
    const recipe = await getRecipeDocumentById(categoryName, recipeId);
    return recipe !== null ? recipe : undefined;
  } catch (error) {
    console.error(`Error fetching recipe with ID ${recipeId} in category ${categoryName}:`, error);
    return undefined;
  }
};



// Search for recipes
export const searchForRecipes = (queryStr: string): ThunkResult<Promise<CategoryItem[]>> => async () => {
  try {
    const recipes = await searchRecipes(queryStr);
    return recipes;
  } catch (error) {
    console.error(`Error searching for recipes with query "${queryStr}":`, error);
    return [];
  }
};

