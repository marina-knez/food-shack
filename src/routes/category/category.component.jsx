import { useContext, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import { CategoryContainer, CategoryTitle, AddRecipeLinkContainer, AddRecipeLink } from './category.styles';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipes = categoriesMap[category.toLowerCase()] || [];

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <AddRecipeLinkContainer>
                <AddRecipeLink to={`/recipes/${category}/add-recipe`}>Add Recipe</AddRecipeLink>
            </AddRecipeLinkContainer>
            <CategoryContainer>
                {
                    recipes.map(recipe => (
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} category={category} />
                        </div>
                    ))
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;
