import RecipeCard from "../recipe-card/recipe-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <div>
            <h2>
                <span>{categoryName.toUpperCase()}</span>
            </h2>
            <Link to={`/update-category/${categoryName}`}>Update Category</Link>
            <br />
            <Link to={`/delete-category/${categoryName}`}>Delete Category</Link>
            <br />
            {
                recipes
                    .filter((_, idx) => idx < 4)
                    .map(recipe => 
                        <RecipeCard key={recipe.id} recipe={recipe} category={categoryName} />
                    )
            }
        </div>
    )
};

export default CategoryPreview;