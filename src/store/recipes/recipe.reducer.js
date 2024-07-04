import { RECIPES_ACTION_TYPES } from "./recipe.types";

const RECIPES_INITIAL_STATE = {
    currentCategory: null,
    recentlyViewed: [],
    recentlyAdded: [],
    formFields: {
        title: '',
        img: '',
        noOfPeople: 0,
        time: 0,
        difficulty: '',
        ingredients: [{ item: '', quantity: 0, unit: '' }],
        instructions: ['']
    }
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
        case RECIPES_ACTION_TYPES.SET_FORM_FIELDS:
            return {
                ...state,
                formFields: payload
            }
        default:
            return state;
    }
};
