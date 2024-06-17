import { createContext, useContext, useEffect, useState } from 'react';
import { createRecipeDocument, updateRecipeDocument, getRecipeDocumentById, addCollectionAndDocuments, searchRecipes } from '../utils/firebase/firebase.utils';
import { CategoriesContext } from './categories.context';
import RECIPE_DATA from '../recipe-data';

export const RecipesContext = createContext({
    setCurrentCategory: () => null,
    addRecipe: () => null,
    updateRecipe: () => null,
    getRecipeById: () => null,
    searchRecipes: () => null,
    searchCategories: () => null,
});

export const RecipesProvider = ({ children }) => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [currentCategory, setCurrentCategory] = useState(null);

    /*useEffect(() => {
        addCollectionAndDocuments('categories', RECIPE_DATA);
    },[]);*/

    const addRecipe = async (recipeData) => {
        if (currentCategory) {
            await createRecipeDocument(currentCategory, recipeData);
        } else {
            console.error('Current category is not set');
        }
    };

    const updateRecipe = async (categoryName, recipeData) => {
        if (currentCategory) {
            await updateRecipeDocument(categoryName, recipeData);
        } else {
            console.error('Current category is not set');
        }
    };

    const getRecipeById = async (categoryName, recipeId) => {
        if (currentCategory) {
            return await getRecipeDocumentById(categoryName, recipeId);
        } else {
            console.error('Current category is not set');
            return null;
        }
    };

    const searchForRecipes = async (queryStr) => {
        return await searchRecipes(queryStr);
    };

    const value = { setCurrentCategory, addRecipe, updateRecipe, getRecipeById, searchForRecipes };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
};
