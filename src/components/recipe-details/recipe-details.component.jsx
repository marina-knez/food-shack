import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';

const RecipeDetails = () => {
    const { category, id } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipe = categoriesMap[category]?.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.img} alt={recipe.title} />
            <p>Serves: {recipe.noOfPeople}</p>
            <p>Time: {recipe.time} minutes</p>
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
            <p>Difficulty: {recipe.difficulty}</p>
        </div>
    );
};

export default RecipeDetails;
