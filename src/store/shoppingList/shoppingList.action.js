import { createAction } from "../../utils/reducer/reducer.utils";
import { SHOPPING_LIST_ACTION_TYPES } from './shoppingList.types';

export const addToShoppingList = (recipe, ingredient) => {
    return createAction(SHOPPING_LIST_ACTION_TYPES.ADD_TO_SHOPPING_LIST, { recipe, ingredient });
}

export const removeFromShoppingList = (recipe, ingredient) => {
    return createAction(SHOPPING_LIST_ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST, { recipe, ingredient });
};

export const addIngredientToList = (shoppingList, newItem) => {
    const existingItem = shoppingList.find(
        (item) => item.recipe === newItem.recipe && item.ingredient.item === newItem.ingredient.item
    );

    if (existingItem) {
        return shoppingList.map((item) =>
            item.recipe === newItem.recipe && item.ingredient.item === newItem.ingredient.item
                ? { ...item, ingredient: { ...item.ingredient, quantity: Number(item.ingredient.quantity) } }
                : item
        );
    }

    return [...shoppingList, newItem];
};