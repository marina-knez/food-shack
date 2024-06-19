import { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([]);

  const addIngredientToList = (shoppingList, newItem) => {
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

  const addToShoppingList = (recipe, ingredient) => {
    setShoppingList((prevList) => addIngredientToList(prevList, { recipe, ingredient }));
  };

  const removeFromShoppingList = (recipe, ingredient) => {
    setShoppingList((prevList) =>
      prevList.filter(
        (item) => !(item.recipe === recipe && item.ingredient.item === ingredient.item)
      )
    );
  };

  return (
    <ShoppingListContext.Provider value={{ shoppingList, addToShoppingList, removeFromShoppingList }}>
      {children}
    </ShoppingListContext.Provider>
  );
};
