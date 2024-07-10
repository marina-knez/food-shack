import { Category } from "./category.types";
import { setCategories } from './category.action';
import { AnyAction } from "redux";

export type CategoriesState = {
    readonly categories: Category[];
}

const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: []
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action: AnyAction): CategoriesState => {
    if(setCategories.match(action)) {
        return { ...state, categories: action.payload };
    }

    return state;
}
