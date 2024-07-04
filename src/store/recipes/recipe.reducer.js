import { RECIPES_ACTION_TYPES } from "./recipe.types";

const RECIPES_INITIAL_STATE = {
    currentCategory: null,
    recentlyViewed: [],
    recentlyAdded: [],
};

export const recipesReducer = (state = RECIPES_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case RECIPES_ACTION_TYPES.SET_RECENTLY_VIEWED:
            return {
                ...state,
                recentlyViewed: payload,
            };
        case RECIPES_ACTION_TYPES.SET_RECENTLY_ADDED:
            return {
                ...state,
                recentlyAdded: payload,
            };
        case RECIPES_ACTION_TYPES.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: payload,
            };
        default:
            return state;
    }
};
