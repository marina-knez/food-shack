import { SHOPPING_LIST_ACTION_TYPES } from "./shoppingList.types";
import { addIngredientToList } from "./shoppingList.action";

const SHOPPING_LIST_INITIAL_STATE = []

export const shoppingListReducer = (state = SHOPPING_LIST_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case SHOPPING_LIST_ACTION_TYPES.ADD_TO_SHOPPING_LIST:
            return addIngredientToList(state, payload);
        case SHOPPING_LIST_ACTION_TYPES.REMOVE_FROM_SHOPPING_LIST:
            return state.filter(
                (item) => !(item.recipe === payload.recipe && item.ingredient.item === payload.ingredient.item)
            );
        default:
            return state;
    }
}
