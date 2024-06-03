import { createContext, useContext, useState } from 'react';
import { createRecipeDocument } from '../utils/firebase/firebase.utils';
import { CategoriesContext } from './categories.context';

export const RecipesContext = createContext({
    setCurrentCategory: () => null,
    addRecipe: () => null,
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

    const value = { setCurrentCategory, addRecipe };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
};
