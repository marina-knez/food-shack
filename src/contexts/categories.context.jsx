import { createContext, useState, useEffect } from 'react';
import { onCategoriesSnapshot } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const unsubscribe = onCategoriesSnapshot((snapshot) => {
            const updatedCategories = snapshot.docs.reduce((acc, doc) => {
                const { categoryName, recipes } = doc.data();
                acc[categoryName.toLowerCase()] = recipes;
                return acc;
            }, {});
            setCategoriesMap(updatedCategories);
        });

        return () => unsubscribe();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};