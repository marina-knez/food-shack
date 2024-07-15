import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { addToShoppingList, removeFromShoppingList } from '../../store/shoppingList/shoppingList.action';
import Page404 from '../../routes/page-404/page-404.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
    RecipeItemContainer,
    RecipeItemBasicsContainer,
    RecipeItemDetailsContainer,
    RecipeItemBasics,
    RecipeImgWrapper,
    RecipeItemTitle,
    RecipeItemInfoContainer,
    RecipeItemDescription,
    RecipeItemInfo,
    RecipeItemIngredientsContainer,
    RecipeItemInstructionsContainer,
    RecipeItemIngredientsTitle,
    RecipeIngredientsList,
    RecipeIngredientsListItem,
    RecipeInstructions,
    RecipeItemInstructionsTitle,
    RecipeInstructionsList,
    RecipeInstructionsStep,
    RecipeInstructionsListItem
} from './recipe-details.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faClock, faHandFist, faCartPlus, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { BaseWrapper } from '../../routes/category/category.styles';
import { BackButtonContainer } from '../../routes/categories-preview/categories-preview.styles';

export type CategoryItemIngredient = {
    item: string;
    quantity: number;
    unit: string;
}

export type CategoryItem =  {
    id: number;
    title: string;
    description: string;
    noOfPeople: number;
    time: number;
    img: string;
    ingredients: CategoryItemIngredient[];
    instructions: string[];
    difficulty: string;
    dateAdded: Date | null;
}

export type CategoryMap = {
    [key: string]: CategoryItem[];
}

const RecipeDetails = () => {
    const { category, id } = useParams<{ category: string; id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categoriesMap = useSelector(selectCategoriesMap) as CategoryMap;

    const recipeId = id ? parseInt(id, 10) : null;

    const recipe = category ? categoriesMap[category]?.find((recipe: CategoryItem) => recipe.id === recipeId) : undefined;

    const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
    const [itemsInCart, setItemsInCart] = useState<boolean[]>([]);

    useEffect(() => {
        if (recipe) {
            setCheckedItems(Array(recipe.instructions.length).fill(false));
            setItemsInCart(Array(recipe.ingredients.length).fill(false));
        }
    }, [recipe]);

    if (!recipe) {
        return <Page404 />;
    }

    const goBack = () => {
        navigate(`/recipes/${category}`);
    };

    const toggleIsItemChecked = (index: number) => {
        setCheckedItems((prevCheckedItems) => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[index] = !newCheckedItems[index];
            return newCheckedItems;
        });
    };

    const toggleIsItemInCart = (index: number) => {
        setItemsInCart((prevItemsInCart) => {
            const newItemsInCart = [...prevItemsInCart];
            newItemsInCart[index] = !newItemsInCart[index];
            const ingredient = recipe.ingredients[index];
            if (newItemsInCart[index]) {
                dispatch(addToShoppingList(recipe, ingredient));
            } else {
                dispatch(removeFromShoppingList(recipe, ingredient));
            }
            return newItemsInCart;
        });
    };

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
                            <p>{recipe.time} min</p>
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
                        {recipe.ingredients.map((ingredient: CategoryItemIngredient, index: number) => (
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
                        {recipe.instructions.map((instruction: string, index: number) => (
                            <RecipeInstructions key={index}>
                                <RecipeInstructionsStep>Step {index + 1}</RecipeInstructionsStep>
                                <RecipeInstructionsListItem className={checkedItems[index] ? 'done' : 'undone'}>
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
