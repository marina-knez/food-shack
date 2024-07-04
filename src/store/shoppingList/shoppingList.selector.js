import { createSelector } from "reselect";

const selectList = (state) => state.shoppingList

export const selectShoppingList = createSelector(
    [selectList],
    (shoppingList) => shoppingList
);