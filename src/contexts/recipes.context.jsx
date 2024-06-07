import { createContext, useContext, useState } from 'react';
import { createRecipeDocument, updateRecipeDocument, getRecipeDocumentById } from '../utils/firebase/firebase.utils';
import { CategoriesContext } from './categories.context';

export const RecipesContext = createContext({
    setCurrentCategory: () => null,
    addRecipe: () => null,
    updateRecipe: () => null,
    getRecipeById: () => null,
});

export const RecipesProvider = ({ children }) => {
    const { categoriesMap } = useContext(CategoriesContext);
    const [currentCategory, setCurrentCategory] = useState(null);

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

    const value = { setCurrentCategory, addRecipe, updateRecipe, getRecipeById };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
};
