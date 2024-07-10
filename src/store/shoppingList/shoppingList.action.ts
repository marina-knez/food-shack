import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer/reducer.utils";
import { SHOPPING_LIST_ACTION_TYPES, ShoppingListItem } from './shoppingList.types';
import { CategoryItem, CategoryItemIngredient } from "../categories/category.types";

export type AddToShoppingList = ActionWithPayload<SHOPPING_LIST_ACTION_TYPES.ADD_TO_SHOPPING_LIST, ShoppingListItem>;

export type RemoveFromShoppingList = ActionWithPayload<SHOPPING_LIST_ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST, ShoppingListItem>;

export const addToShoppingList = withMatcher((recipe: CategoryItem, ingredient: CategoryItemIngredient): AddToShoppingList =>
     createAction(SHOPPING_LIST_ACTION_TYPES.ADD_TO_SHOPPING_LIST, { recipe, ingredient }));

export const removeFromShoppingList = withMatcher((recipe: CategoryItem, ingredient: CategoryItemIngredient): RemoveFromShoppingList => {
    return createAction(SHOPPING_LIST_ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST, { recipe, ingredient });
});

export const addIngredientToList = (shoppingList: ShoppingListItem[], newItem: ShoppingListItem): ShoppingListItem[] => {
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