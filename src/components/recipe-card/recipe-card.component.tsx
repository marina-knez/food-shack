import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Recipe } from '../../store/recipes/recipe.types';
import { addRecentlyViewed } from '../../store/recipes/recipe.action';
import { Link } from "react-router-dom";
import { RecipeCardContainer, RecipeCardInfo, RecipeCardLinks, RecipeCardLink, RecipeCardTitle } from './recipe-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export type RecipeCardProps = {
    category: string;
    recipe: Recipe;
    onClick?: () => void;
}

const RecipeCard = ({ category, recipe, onClick }: RecipeCardProps) => {
    const { id, title, img, noOfPeople, time, difficulty } = recipe;
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    const handleViewRecipe = () => {
        dispatch(addRecentlyViewed(title));
        if (onClick) {
            onClick();
        }
    };


    return (
        <RecipeCardContainer onClick={handleViewRecipe}>
            <Link to={`/recipes/${category}/` + id}>
                <img src={img} alt={title} title={title} />
                <RecipeCardTitle>{title}</RecipeCardTitle>
            </Link>
            <RecipeCardInfo>
                <span><b>Serves:</b> {noOfPeople}</span>
                <span><b>Time:</b> {time} minutes</span>
                <span><b>Difficulty:</b> {difficulty}</span>
            </RecipeCardInfo>
            <RecipeCardLinks>
                <RecipeCardLink to={`/recipes/${category}/update-recipe/${recipe.id}`}>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                        <FontAwesomeIcon icon={faPenToSquare} className="edit" />
                        Update
                    </Button>
                </RecipeCardLink>
                <RecipeCardLink to={`/recipes/${category}/delete-recipe/${recipe.id}`}>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base}>
                        <FontAwesomeIcon icon={faTrashCan} className="delete" />
                        Delete
                    </Button>
                </RecipeCardLink>
            </RecipeCardLinks>
        </RecipeCardContainer>
    )
};

export default RecipeCard;