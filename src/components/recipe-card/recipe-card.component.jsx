import { Link } from "react-router-dom";
import { RecipeCardContainer, RecipeCardInfo, RecipeCardLinks, RecipeCardLink, RecipeCardTitle } from './recipe-card.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const RecipeCard = ({ category, recipe }) => {
    const { id, title, img, noOfPeople, time, difficulty } = recipe;

    return (
        <RecipeCardContainer>
            <Link to={`/recipes/${category}/` + id}>
                <img src={img} alt={title} title={title} />
                <RecipeCardTitle>{title}</RecipeCardTitle>
            </Link>
            <RecipeCardInfo>
                <span>Serves: {noOfPeople}</span>
                <span>Time: {time}</span>
                <span>Difficulty: {difficulty}</span>
            </RecipeCardInfo>
            <RecipeCardLinks>
                <RecipeCardLink to={`/recipes/${category}/update-recipe/${recipe.id}`}>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Update</Button>
                </RecipeCardLink>
                <RecipeCardLink to={`/recipes/${category}/delete-recipe/${recipe.id}`}>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base}>Delete</Button>
                </RecipeCardLink>
            </RecipeCardLinks>
        </RecipeCardContainer>
    )
};

export default RecipeCard;