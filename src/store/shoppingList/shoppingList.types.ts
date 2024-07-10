import { CategoryItem, CategoryItemIngredient } from "../categories/category.types";

export enum SHOPPING_LIST_ACTION_TYPES {
    ADD_TO_SHOPPING_LIST = 'shoppingList/ADD_TO_SHOPPING_LIST',
    REMOVE_FROM_SHOPPING_LIST = 'shoppingList/REMOVE_FROM_SHOPPING_LIST'
}

export type ShoppingList = {
    recipeTitle: string;
    ingredient: CategoryItemIngredient[];
}

export type ShoppingListItem = {
    recipe: CategoryItem;
    ingredient: CategoryItemIngredient;
}