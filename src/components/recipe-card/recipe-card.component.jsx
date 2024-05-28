import { Link } from "react-router-dom";

const RecipeCard = ({ category, recipe }) => {
    const { id, title, img, noOfPeople, time, difficulty } = recipe;

    return (
        <div>
            <Link to={`/recipes/${category}/` + id}>{title}
                <img src={img} alt={title} title={title} />
            </Link>
            <div>
                <h2>{title}</h2>
                <span>{noOfPeople}</span>
                <span>{time}</span>
                <p>{difficulty}</p>
            </div>
        </div>
    )
};

export default RecipeCard;