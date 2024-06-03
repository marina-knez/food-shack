import RecipeCard from "../recipe-card/recipe-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <div>
            <h2>
                <Link to={`/recipes/${categoryName}`}>{categoryName.toUpperCase()}</Link>
            </h2>
            <Link to={`/recipes/update-category/${categoryName}`}>Update Category</Link>
            <br />
            <Link to={`/recipes/delete-category/${categoryName}`}>Delete Category</Link>
            <br />
            {
                recipes
                    .filter((_, idx) => idx < 4)
                    .map(recipe => 
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} category={categoryName} />
                            <Link to={`/recipes/${categoryName}/update-recipe/${recipe.id}`}>Update</Link>
                            <Link to={`/recipes/${categoryName}/delete-recipe/${recipe.id}`}>Delete</Link>
                        </div>
                    )
            }
        </div>
    );
};

export default CategoryPreview;
