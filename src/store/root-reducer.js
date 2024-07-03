import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { recipesReducer } from "./recipes/recipe.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    recipes: recipesReducer
})