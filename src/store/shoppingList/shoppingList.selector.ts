import { createSelector } from "reselect";
import { ShoppingListState } from "./shoppingList.reducer";
import { RootState } from '../store';

const selectListReducer = (state: RootState): ShoppingListState => state.shoppingList

export const selectShoppingList = createSelector(
    [selectListReducer],
    (shoppingList) => shoppingList
);