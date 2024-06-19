import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { ShoppingListContext } from '../../contexts/shoppingList.context';

import { RecipeItemContainer, RecipeItemBasicsContainer, RecipeItemDetailsContainer, RecipeItemBasics, RecipeImgWrapper, RecipeItemTitle, RecipeItemInfoContainer, RecipeItemDescription, RecipeItemInfo, RecipeItemIngredientsContainer, RecipeItemInstructionsContainer, RecipeItemIngredientsTitle, RecipeIngredientsList, RecipeIngredientsListItem, RecipeInstructions, RecipeItemInstructionsTitle, RecipeInstructionsList, RecipeInstructionsStep, RecipeInstructionsListItem, NotFoundPageContainer, NotFoundText } from './recipe-details.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faClock, faHandFist, faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';

const RecipeDetails = () => {
    const { category, id } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const { shoppingList, addToShoppingList, removeFromShoppingList } = useContext(ShoppingListContext);
    const recipe = categoriesMap[category]?.find((recipe) => recipe.id === parseInt(id));
    const [checkedItems, setCheckedItems] = useState(Array(recipe?.instructions.length).fill(false));
    const [itemsInCart, setItemsInCart] = useState(Array(recipe?.ingredients.length).fill(false));

    const toggleIsItemChecked = (index) => {
        setCheckedItems(prevCheckedItems => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[index] = !newCheckedItems[index];
            return newCheckedItems;
        });
    };

    const toggleIsItemInCart = (index) => {
        setItemsInCart(prevItemsInCart => {
            const newItemsInCart = [...prevItemsInCart];
            newItemsInCart[index] = !newItemsInCart[index];
            if (newItemsInCart[index]) {
                addToShoppingList(recipe.title, recipe.ingredients[index]);
            } else {
                removeFromShoppingList(recipe.title, recipe.ingredients[index]);
            }
            return newItemsInCart;
        });
    };


    if (!recipe) {
        return (
            <NotFoundPageContainer>
                <NotFoundText>Recipe not found</NotFoundText>
                <div style={{ width: '100%', height: '0', paddingBottom: '61%', position: 'relative' }}>
                    <iframe
                        src="https://giphy.com/embed/SuHUqaOZM5GNz4hqCL"
                        title="Recipe not found"
                        style={{ position: 'absolute', height: '100%', width: '100%', frameBorder: '0' }}
                        className="giphy-embed"
                        allowFullScreen
                    ></iframe>
                </div>
            </NotFoundPageContainer>
    );
    }

    return (
        <RecipeItemContainer>
            <RecipeItemTitle>{recipe.title}</RecipeItemTitle>
            <RecipeItemBasicsContainer>
                <RecipeImgWrapper>
                    <img src={recipe.img} alt={recipe.title} />
                </RecipeImgWrapper>
                <RecipeItemBasics>
                    <RecipeItemDescription>{recipe.description}</RecipeItemDescription>
                    <RecipeItemInfoContainer>
                        <RecipeItemInfo>
                            <FontAwesomeIcon icon={faUserGroup} className='icon people' />
                            <p><b>Serves: </b></p>
                            <p>{recipe.noOfPeople}</p>
                        </RecipeItemInfo>
                        <RecipeItemInfo>
                            <FontAwesomeIcon icon={faClock} className='icon clock' />
                            <p><b>Time: </b></p>
                            <p>{recipe.time} minutes</p>
                        </RecipeItemInfo>
                        <RecipeItemInfo>
                            <FontAwesomeIcon icon={faHandFist} className='icon hand' />
                            <p><b>Difficulty: </b></p>
                            <p>{recipe.difficulty}</p>
                        </RecipeItemInfo>
                    </RecipeItemInfoContainer>
                </RecipeItemBasics>
            </RecipeItemBasicsContainer>
            <RecipeItemDetailsContainer>
                <RecipeItemIngredientsContainer>
                    <RecipeItemIngredientsTitle>Ingredients</RecipeItemIngredientsTitle>
                    <RecipeIngredientsList>
                        {recipe.ingredients.map((ingredient, index) => (
                            <RecipeIngredientsListItem key={index}>
                                {itemsInCart[index] ? (
                                    <FontAwesomeIcon icon={faCheck} className='cart-icon' onClick={() => toggleIsItemInCart(index)} />
                                ) : (
                                    <FontAwesomeIcon icon={faCartPlus} className='cart-icon add' onClick={() => toggleIsItemInCart(index)} />
                                )}
                                {ingredient.quantity} {ingredient.unit} {ingredient.item}
                            </RecipeIngredientsListItem>
                        ))}
                    </RecipeIngredientsList>
                </RecipeItemIngredientsContainer>
                <RecipeItemInstructionsContainer>
                    <RecipeItemInstructionsTitle>Instructions</RecipeItemInstructionsTitle>
                    <RecipeInstructionsList>
                        {recipe.instructions.map((instruction, index) => (
                            <RecipeInstructions key={index}>
                                <RecipeInstructionsStep>Step {index + 1}</RecipeInstructionsStep>
                                <RecipeInstructionsListItem className={checkedItems[index] ? "done" : "undone"}>
                                    {checkedItems[index] ? (
                                        <FontAwesomeIcon icon={faSquareCheck} className='list-icon checked' onClick={() => toggleIsItemChecked(index)} />
                                    ) : (
                                        <FontAwesomeIcon icon={faSquare} className='list-icon square' onClick={() => toggleIsItemChecked(index)} />
                                    )}
                                    {instruction}
                                </RecipeInstructionsListItem>
                            </RecipeInstructions>
                        ))}
                    </RecipeInstructionsList>
                </RecipeItemInstructionsContainer>
            </RecipeItemDetailsContainer>
        </RecipeItemContainer>
    );
};

export default RecipeDetails;
