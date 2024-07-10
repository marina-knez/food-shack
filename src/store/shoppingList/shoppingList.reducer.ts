import { addIngredientToList, addToShoppingList, removeFromShoppingList } from "./shoppingList.action";
import { ShoppingListItem } from "./shoppingList.types";
import { AnyAction } from "redux";

export type ShoppingListState = ShoppingListItem[];

const SHOPPING_LIST_INITIAL_STATE: ShoppingListState = []

export const shoppingListReducer = (state = SHOPPING_LIST_INITIAL_STATE, action: AnyAction): ShoppingListState => {

    if(addToShoppingList.match(action)) {
        return addIngredientToList(state, action.payload);
    }

    if(removeFromShoppingList.match(action)) {
        return state.filter(
            (item) => !(item.recipe === action.payload.recipe && item.ingredient.item === action.payload.ingredient.item)
        );
    }

    return state;
}
