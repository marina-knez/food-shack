import { createSelector } from "reselect";

const selectListReducer = (state) => state.shoppingList

export const selectShoppingList = createSelector(
    [selectListReducer],
    (shoppingList) => shoppingList
);