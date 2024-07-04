import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShoppingList } from '../../store/shoppingList/shoppingList.selector';
import { removeFromShoppingList } from '../../store/shoppingList/shoppingList.action';

import { ShoppingListPageWrapper, ShoppingPageTitle, ShoppingListWrapper, ShoppingListContainer, ShoppingListItem, EmptyShoppingList } from './shopping-list.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ShoppingList = () => {
  const shoppingList = useSelector(selectShoppingList);
  const [checkedItems, setCheckedItems] = useState(Array(shoppingList.length).fill(false));
  const dispatch = useDispatch();

  const toggleIsItemChecked = (index) => {
    setCheckedItems(prevCheckedItems => {
        const newCheckedItems = [...prevCheckedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        return newCheckedItems;
    });
};

  const handleClearItemFromList = (recipeTitle, ingredient) => {
    dispatch(removeFromShoppingList(recipeTitle, ingredient));
  }

  const organizeShoppingList = () => {
      const organizedList = {};

      shoppingList.forEach((item) => {
          const { recipe, ingredient } = item;
          if (!organizedList[recipe]) {
              organizedList[recipe] = [ingredient];
          } else {
              organizedList[recipe].push(ingredient);
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
                  {organizedShoppingList[recipeTitle].map((ingredient, index) => (
                    <ShoppingListItem key={index} className={checkedItems[index] ? "done" : "undone"}>
                      <div>
                        {checkedItems[index] ? (
                          <FontAwesomeIcon icon={faSquareCheck} className='list-icon checked' onClick={() => toggleIsItemChecked(index)} />
                        ) : (
                          <FontAwesomeIcon icon={faSquare} className='list-icon square' onClick={() => toggleIsItemChecked(index)} />
                        )}
                        {ingredient.quantity} {ingredient.unit} {ingredient.item}
                      </div>
                      <div>
                        <FontAwesomeIcon icon={faTrashCan} className='list-icon trash' onClick={() => handleClearItemFromList(recipeTitle, ingredient)} />
                      </div>
                    </ShoppingListItem>
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