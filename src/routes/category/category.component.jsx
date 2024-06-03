import { useContext, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipes = categoriesMap[category.toLowerCase()] || [];

    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            <Link to={`/recipes/${category}/add-recipe`}>Add Recipe</Link>
            {
                recipes.map(recipe => (
                    <div key={recipe.id}>
                        <RecipeCard recipe={recipe} category={category} />
                        <Link to={`/recipes/${category}/update-recipe/${recipe.id}`}>Update</Link>
                        <br />
                        <Link to={`/recipes/${category}/delete-recipe/${recipe.id}`}>Delete</Link>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default Category;
