/*import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: [],
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
            console.log(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    );
};*/

// src/contexts/categories.context.js

import { createContext, useEffect, useReducer } from "react";
import {
    getCategoriesAndDocuments,
    onCategoriesSnapshot,
    createCategoryDocument,
    updateCategoryDocument,
    deleteCategoryDocument
} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: [],
    addCategory: () => null,
    updateCategory: () => null,
    deleteCategory: () => null,
});

const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: 'SET_CATEGORIES_MAP'
};

const categoriesReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in categoriesReducer`);
    }
};

const INITIAL_STATE = {
    categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(categoriesReducer, INITIAL_STATE);
    const { categoriesMap } = state;

    const setCategoriesMap = (categoriesMap) => {
        dispatch({ type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, payload: categoriesMap });
    };

    useEffect(() => {
        const unsubscribe = onCategoriesSnapshot(snapshot => {
            const categoryMap = snapshot.docs.reduce((acc, docSnapshot) => {
                const { categoryName, recipes } = docSnapshot.data();
                acc[categoryName.toLowerCase()] = recipes;
                return acc;
            }, {});
            setCategoriesMap(categoryMap);
        });
        
        return () => unsubscribe();
    }, []);

    const addCategory = async (categoryName) => {
        await createCategoryDocument(categoryName);
    };

    const updateCategory = async (oldCategoryName, newCategoryName) => {
        await updateCategoryDocument(oldCategoryName, newCategoryName);
    };

    const deleteCategory = async (categoryName) => {
        await deleteCategoryDocument(categoryName);
    };

    const contextValue = {
        categoriesMap,
        addCategory,
        updateCategory,
        deleteCategory
    };

    return (
        <CategoriesContext.Provider value={contextValue}>
            {children}
        </CategoriesContext.Provider>
    );
};
