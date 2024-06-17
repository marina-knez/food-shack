import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipeItemContainer, RecipeItemBasicsContainer, RecipeItemDetailsContainer, RecipeItemBasics, RecipeImgWrapper, RecipeItemTitle, RecipeItemInfo, RecipeItemIngredientsContainer, RecipeItemInstructionsContainer, RecipeItemIngredientsTitle, RecipeIngredientsList, RecipeIngredientsListItem, RecipeInstructions, RecipeItemInstructionsTitle, RecipeInstructionsList, RecipeInstructionsStep, RecipeInstructionsListItem, NotFoundPageContainer, NotFoundText } from './recipe-details.styles';

const RecipeDetails = () => {
    const { category, id } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipe = categoriesMap[category]?.find((recipe) => recipe.id === parseInt(id));

    if (!recipe) {
        return (
            <NotFoundPageContainer>
                <NotFoundText>Recipe not found</NotFoundText>
                <div style={{width: "100%", height: "0", paddingBottom: "61%", position: "relative"}}><iframe src="https://giphy.com/embed/SuHUqaOZM5GNz4hqCL" title='Recipe not found' style={{position:"absolute", height: "100%", width: "100%", frameBorder: "0"}} class="giphy-embed" allowFullScreen></iframe>
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
                    <p>{recipe.description}</p>
                    <RecipeItemInfo><b>Serves:</b> {recipe.noOfPeople}</RecipeItemInfo>
                    <RecipeItemInfo><b>Time:</b> {recipe.time} minutes</RecipeItemInfo>
                    <RecipeItemInfo><b>Difficulty:</b> {recipe.difficulty}</RecipeItemInfo>
                </RecipeItemBasics>
            </RecipeItemBasicsContainer>
            <RecipeItemDetailsContainer>
                <RecipeItemIngredientsContainer>
                    <RecipeItemIngredientsTitle>Ingredients</RecipeItemIngredientsTitle>
                    <RecipeIngredientsList>
                        {recipe.ingredients.map((ingredient, index) => (
                            <RecipeIngredientsListItem key={index}>
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
                                <RecipeInstructionsListItem>{instruction}</RecipeInstructionsListItem>
                            </RecipeInstructions>
                        ))}
                    </RecipeInstructionsList>
                </RecipeItemInstructionsContainer>
            </RecipeItemDetailsContainer>
        </RecipeItemContainer>
    );
};

export default RecipeDetails;
