import { useContext, Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { CategoryContainer, CategoryWrapper, RecipeCardContainer, CategoryTitle, AddRecipeLinkContainer, AddRecipeLink, LoadMoreButtonContainer } from './category.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const recipes = categoriesMap[category.toLowerCase()] || [];
    const [displayedRecipes, setDisplayedRecipes] = useState(4);

    const handleLoadMore = () => {
        setDisplayedRecipes(prevCount => prevCount + 4);
    };

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryWrapper>
                <CategoryContainer>
                    {
                        recipes
                            .slice(0, displayedRecipes)
                            .map(recipe => (
                                <RecipeCardContainer key={recipe.id}>
                                    <RecipeCard recipe={recipe} category={category} />
                                </RecipeCardContainer>
                        ))
                    }
                </CategoryContainer>
                {displayedRecipes < recipes.length && (
                <LoadMoreButtonContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleLoadMore}>Load More</Button>
                </LoadMoreButtonContainer>
                )}
                <AddRecipeLinkContainer>
                    <AddRecipeLink to={`/recipes/${category}/add-recipe`}>
                        <FontAwesomeIcon icon={faPlus} className='add' />
                        Add Recipe
                    </AddRecipeLink>
                </AddRecipeLinkContainer>
            </CategoryWrapper>
        </Fragment>
    );
};

export default Category;
