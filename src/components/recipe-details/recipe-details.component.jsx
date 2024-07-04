import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { addToShoppingList, removeFromShoppingList } from '../../store/shoppingList/shoppingList.action';
import Page404 from '../../routes/page-404/page-404.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { RecipeItemContainer, RecipeItemBasicsContainer, RecipeItemDetailsContainer, RecipeItemBasics, RecipeImgWrapper, RecipeItemTitle, RecipeItemInfoContainer, RecipeItemDescription, RecipeItemInfo, RecipeItemIngredientsContainer, RecipeItemInstructionsContainer, RecipeItemIngredientsTitle, RecipeIngredientsList, RecipeIngredientsListItem, RecipeInstructions, RecipeItemInstructionsTitle, RecipeInstructionsList, RecipeInstructionsStep, RecipeInstructionsListItem } from './recipe-details.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faClock, faHandFist, faCartPlus, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { BaseWrapper } from '../../routes/category/category.styles';
import { BackButtonContainer } from '../../routes/categories-preview/categories-preview.styles';

const RecipeDetails = () => {
    const { category, id } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const recipe = categoriesMap[category]?.find((recipe) => recipe.id === parseInt(id));
    const [checkedItems, setCheckedItems] = useState(Array(recipe?.instructions.length).fill(false));
    const [itemsInCart, setItemsInCart] = useState(Array(recipe?.ingredients.length).fill(false));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () => {
        navigate(`/recipes/${category}`);
    };

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
                dispatch(addToShoppingList(recipe.title, recipe.ingredients[index]));
            } else {
                dispatch(removeFromShoppingList(recipe.title, recipe.ingredients[index]));
            }
            return newItemsInCart;
        });
    };

    if (!recipe) {
        return (
            <Page404 />
        );
    }

    return (
        <RecipeItemContainer>
            <BaseWrapper>
                <BackButtonContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.back} onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='icon-back'/>
                    </Button>
                </BackButtonContainer>
                <RecipeItemTitle>{recipe.title}</RecipeItemTitle>
            </BaseWrapper>
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
