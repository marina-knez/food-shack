import { useContext, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipes = categoriesMap[category.toLowerCase()] || [];

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <Link to={`/recipes/${category}/add-recipe`}>Add Recipe</Link>
                {
                    recipes.map(recipe => (
                        <CategoryContainer key={recipe.id}>
                            <RecipeCard recipe={recipe} category={category} />
                            <Link to={`/recipes/${category}/update-recipe/${recipe.id}`}>Update</Link>
                            <br />
                            <Link to={`/recipes/${category}/delete-recipe/${recipe.id}`}>Delete</Link>
                        </CategoryContainer>
                    ))
                }
        </Fragment>
    );
};

export default Category;
