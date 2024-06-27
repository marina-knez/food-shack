import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { DeleteRecipePageContainer, DeleteRecipeTitle, DeleteRecipeButtonContainer } from "./delete-recipe.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';
import { RecipesContext } from '../../contexts/recipes.context';

const DeleteRecipe = () => {
    const { category, recipeId } = useParams();
    const { deleteRecipe } = useContext(RecipesContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteRecipe(category, parseInt(recipeId));
        navigate(`/recipes/${category}`);
    };

    return (
        <DeleteRecipePageContainer>
            <DeleteRecipeTitle>Are you sure you want to delete this recipe?</DeleteRecipeTitle>
            <DeleteRecipeButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                    Delete
                </Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faX} className="cancel" />
                    Cancel
                </Button>
            </DeleteRecipeButtonContainer>
        </DeleteRecipePageContainer>
    );
};

export default DeleteRecipe;
