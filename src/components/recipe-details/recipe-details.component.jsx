import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipeItemContainer, RecipeItemBasicsContainer, RecipeItemDetailsContainer, RecipeItemBasics, RecipeItemTitle, RecipeItemInfo, RecipeItemIngredientsContainer, RecipeItemInstructionsContainer, RecipeItemIngredientsTitle, RecipeItemInstructionsTitle } from './recipe-details.styles';

const RecipeDetails = () => {
    const { category, id } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipe = categoriesMap[category]?.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <RecipeItemContainer>
            <RecipeItemTitle>{recipe.title}</RecipeItemTitle>
            <RecipeItemBasicsContainer>
                <div>
                    <img src={recipe.img} alt={recipe.title} />
                </div>
                <RecipeItemBasics>
                    <RecipeItemInfo><b>Serves:</b> {recipe.noOfPeople}</RecipeItemInfo>
                    <RecipeItemInfo><b>Time:</b> {recipe.time} minutes</RecipeItemInfo>
                    <RecipeItemInfo><b>Difficulty:</b> {recipe.difficulty}</RecipeItemInfo>
                </RecipeItemBasics>
            </RecipeItemBasicsContainer>
            <RecipeItemDetailsContainer>
                <RecipeItemIngredientsContainer>
                    <RecipeItemIngredientsTitle>Ingredients</RecipeItemIngredientsTitle>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                {ingredient.quantity} {ingredient.unit} {ingredient.item}
                            </li>
                        ))}
                    </ul>
                </RecipeItemIngredientsContainer>
                <RecipeItemInstructionsContainer>
                    <RecipeItemInstructionsTitle>Instructions</RecipeItemInstructionsTitle>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </RecipeItemInstructionsContainer>
            </RecipeItemDetailsContainer>
        </RecipeItemContainer>
    );
};

export default RecipeDetails;
