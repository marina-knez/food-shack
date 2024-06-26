import { createContext, useEffect, useState } from 'react';
import { createRecipeDocument, updateRecipeDocument, getRecipeDocumentById, searchRecipes, onCategoriesSnapshot } from '../utils/firebase/firebase.utils';

export const RecipesContext = createContext({
    setCurrentCategory: () => null,
    addRecipe: () => null,
    updateRecipe: () => null,
    getRecipeById: () => null,
    searchRecipes: () => null,
    searchCategories: () => null,
    addRecentlyViewed: () => null,
    recentlyViewed: [],
    recentlyAdded: [],
});

export const RecipesProvider = ({ children }) => {
    const [currentCategory, setCurrentCategory] = useState(null);
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const [recentlyAdded, setRecentlyAdded] = useState([]);

    useEffect(() => {
        const unsubscribe = onCategoriesSnapshot((snapshot) => {
            const updatedCategories = snapshot.docs.reduce((acc, doc) => {
                const { categoryName, recipes } = doc.data();
                acc[categoryName.toLowerCase()] = recipes;
                return acc;
            }, {});
            
            const allRecipes = Object.values(updatedCategories).flat();
            const sortedByDateAdded = allRecipes
                .filter(recipe => recipe.dateAdded)
                .sort((a, b) => b.dateAdded.toDate() - a.dateAdded.toDate());
            setRecentlyAdded(sortedByDateAdded.slice(0, 4));
        });

        return () => unsubscribe();
    }, []);

    const addRecentlyViewed = (recipe) => {
        setRecentlyViewed(prev => {
            const updated = [recipe, ...prev.filter(r => r.id !== recipe.id)].slice(0, 4);
            return updated;
        });
    };

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

    const value = { 
        setCurrentCategory, 
        addRecipe, 
        updateRecipe, 
        getRecipeById, 
        searchForRecipes,
        addRecentlyViewed,
        recentlyViewed,
        recentlyAdded 
    };

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>
    );
};