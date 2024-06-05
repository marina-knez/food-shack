import { Link } from "react-router-dom";
import { RecipeCardContainer, RecipeCardInfo, RecipeCardLinks, RecipeCardLink, RecipeCardTitle } from './recipe-card.styles';

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
                <RecipeCardLink to={`/recipes/${category}/update-recipe/${recipe.id}`}>Update</RecipeCardLink>
                <RecipeCardLink to={`/recipes/${category}/delete-recipe/${recipe.id}`}>Delete</RecipeCardLink>
            </RecipeCardLinks>
        </RecipeCardContainer>
    )
};

export default RecipeCard;