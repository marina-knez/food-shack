import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShoppingList } from '../../store/shoppingList/shoppingList.selector';
import { removeFromShoppingList } from '../../store/shoppingList/shoppingList.action';
import { ShoppingListItem } from '../../store/shoppingList/shoppingList.types';

import { ShoppingListPageWrapper, ShoppingPageTitle, ShoppingListWrapper, ShoppingListContainer, SingleShoppingListItem, EmptyShoppingList } from './shopping-list.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(Array(shoppingList.length).fill(false));
  const dispatch = useDispatch();

  const toggleIsItemChecked = (index: number) => {
    setCheckedItems(prevCheckedItems => {
        const newCheckedItems = [...prevCheckedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        return newCheckedItems;
    });
};

  const handleClearItemFromList = (recipeTitle: string, ingredient: string) => {
    const itemToRemove = shoppingList.find(item => item.recipe.title === recipeTitle && item.ingredient.item === ingredient);
    if (itemToRemove) {
        dispatch(removeFromShoppingList(itemToRemove.recipe, itemToRemove.ingredient));
    }
  }

  const organizeShoppingList = () => {
    const organizedList: Record<string, ShoppingListItem[]> = {};

      shoppingList.forEach((item) => {
          const { recipe, ingredient } = item;
          if (!organizedList[recipe.title]) {
              organizedList[recipe.title] = [{ recipe, ingredient }];
          } else {
              organizedList[recipe.title].push({ recipe, ingredient });
          }
      });
      return organizedList;
  };

  const organizedShoppingList = organizeShoppingList();

  return (
        <ShoppingListPageWrapper>
          <ShoppingPageTitle>My Shopping List</ShoppingPageTitle>
          {Object.keys(organizedShoppingList).length ? (
            Object.keys(organizedShoppingList).map((recipeTitle) => (
              <ShoppingListWrapper key={recipeTitle}>
                <ShoppingListContainer>
                  <h3>{recipeTitle}</h3>
                  {organizedShoppingList[recipeTitle].map((item, index) => (
                    <SingleShoppingListItem key={index} className={checkedItems[index] ? "done" : "undone"}>
                      <div>
                        {checkedItems[index] ? (
                          <FontAwesomeIcon icon={faSquareCheck} className='list-icon checked' onClick={() => toggleIsItemChecked(index)} />
                        ) : (
                          <FontAwesomeIcon icon={faSquare} className='list-icon square' onClick={() => toggleIsItemChecked(index)} />
                        )}
                        {item.ingredient.quantity} {item.ingredient.unit} {item.ingredient.item}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faTrashCan} className='list-icon trash' onClick={() => handleClearItemFromList(recipeTitle, item.ingredient.item)} />
                      </div>
                    </SingleShoppingListItem>
                  ))}
                </ShoppingListContainer>
              </ShoppingListWrapper>
            ))
          ) : (
            <EmptyShoppingList>
              <p>Your shopping list is empty.</p>
            </EmptyShoppingList>
          )}
      </ShoppingListPageWrapper>
    )
}

export default ShoppingList;