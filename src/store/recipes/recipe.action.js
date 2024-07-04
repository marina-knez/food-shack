import { createAction } from "../../utils/reducer/reducer.utils";
import { RECIPES_ACTION_TYPES } from "./recipe.types";
import { 
  getCategoriesAndDocuments,
  createRecipeDocument,
  updateRecipeDocument,
  deleteRecipeDocument,
  getRecipeDocumentById,
  searchRecipes 
} from "../../utils/firebase/firebase.utils";

export const setCurrentCategory = (category) => 
  createAction(RECIPES_ACTION_TYPES.SET_CURRENT_CATEGORY, category);

export const setRecentlyViewed = (recentlyViewed) => 
  createAction(RECIPES_ACTION_TYPES.SET_RECENTLY_VIEWED, recentlyViewed);

export const setRecentlyAdded = (recentlyAdded) => 
  createAction(RECIPES_ACTION_TYPES.SET_RECENTLY_ADDED, recentlyAdded);


export const fetchRecentlyAddedRecipes = () => async (dispatch) => {
  try {
    const snapshot = await getCategoriesAndDocuments();

    if (!snapshot || !snapshot.docs) {
      throw new Error('Snapshot or snapshot.docs is undefined');
    }

    const updatedCategories = snapshot.docs.reduce((acc, doc) => {
      const { categoryName, recipes } = doc.data();
      if (recipes) {
        acc[categoryName.toLowerCase()] = recipes;
      }
      return acc;
    }, {});

    const allRecipes = Object.values(updatedCategories).flat();
    const sortedByDateAdded = allRecipes
      .filter(recipe => recipe.dateAdded)  // Ensure recipe.dateAdded exists
      .sort((a, b) => b.dateAdded.toDate() - a.dateAdded.toDate());

    dispatch(setRecentlyAdded(sortedByDateAdded.slice(0, 4)));
  } catch (error) {
    console.error('Failed to fetch recently added recipes:', error);
  }
};

  

export const addRecentlyViewed = (recipeTitle) => (dispatch, getState) => {
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


export const addRecipe = (currentCategory, recipeData) => async (dispatch) => {

  if (currentCategory) {
      try {
          await createRecipeDocument(currentCategory, recipeData);
          dispatch(fetchRecentlyAddedRecipes());  // Fetch recent recipes after adding a new one
      } catch (error) {
          console.error('Error adding recipe:', error);
      }
  } else {
      console.error('Current category is not set');
  }
};

export const updateRecipe = (categoryName, recipeData) => async (dispatch) => {
    await updateRecipeDocument(categoryName, recipeData);
    dispatch(fetchRecentlyAddedRecipes());
};

export const deleteRecipe = (categoryName, recipeId) => async (dispatch) => {
    await deleteRecipeDocument(categoryName, recipeId);
    dispatch(fetchRecentlyAddedRecipes());
};

export const getRecipeById = (categoryName, recipeId) => async (dispatch) => {
    const recipe = await getRecipeDocumentById(categoryName, recipeId);
    return recipe;
};

export const searchForRecipes = (queryStr) => async (dispatch) => {
    const recipes = await searchRecipes(queryStr);
    return recipes;
};