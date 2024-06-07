import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { DeleteRecipePageContainer, DeleteRecipeTitle, DeleteRecipeButtonContainer } from "./delete-recipe.styles";

const DeleteRecipe = () => {
    const { category, recipeId } = useParams();
    const { deleteRecipe } = useContext(CategoriesContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteRecipe(category, parseInt(recipeId));
        navigate(`/recipes/${category}`);
    };

    return (
        <DeleteRecipePageContainer>
            <DeleteRecipeTitle>Are you sure you want to delete this recipe?</DeleteRecipeTitle>
            <DeleteRecipeButtonContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleDelete}>Delete</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate(-1)}>Cancel</Button>
            </DeleteRecipeButtonContainer>
        </DeleteRecipePageContainer>
    );
};

export default DeleteRecipe;
