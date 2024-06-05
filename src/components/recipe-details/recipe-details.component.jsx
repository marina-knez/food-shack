import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipeItemContainer, RecipeItemBasicsContainer, RecipeItemDetailsContainer, RecipeItemBasics, RecipeItemTitle, RecipeItemInfo } from './recipe-details.styles';

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
                    <RecipeItemInfo>Serves: {recipe.noOfPeople}</RecipeItemInfo>
                    <RecipeItemInfo>Time: {recipe.time} minutes</RecipeItemInfo>
                    <RecipeItemInfo>Difficulty: {recipe.difficulty}</RecipeItemInfo>
                </RecipeItemBasics>
            </RecipeItemBasicsContainer>
            <RecipeItemDetailsContainer>
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.quantity} {ingredient.unit} {ingredient.item}
                        </li>
                    ))}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </RecipeItemDetailsContainer>
        </RecipeItemContainer>
    );
};

export default RecipeDetails;
