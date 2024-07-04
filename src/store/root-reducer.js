import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { recipesReducer } from "./recipes/recipe.reducer";
import { shoppingListReducer } from "./shoppingList/shoppingList.reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    shoppingList: shoppingListReducer
})