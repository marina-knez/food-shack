import { Fragment, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import { BaseWrapper, CategoryContainer, CategoryWrapper, RecipeCardContainer, CategoryTitle, AddRecipeLinkContainer, AddRecipeLink, LoadMoreButtonContainer } from './category.styles';
import { BackButtonContainer } from '../categories-preview/categories-preview.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryMap } from '../../store/categories/category.types';
import { Recipe } from '../../store/recipes/recipe.types';

const Category = () => {
    const { category } = useParams<{ category: string }>();
    const categoriesMap = useSelector(selectCategoriesMap) as CategoryMap;
    const recipes: Recipe[] = category ? categoriesMap[category.toLowerCase()] || [] : [];
    const [displayedRecipes, setDisplayedRecipes] = useState<number>(4);
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/recipes');
    };

    const handleLoadMore = () => {
        setDisplayedRecipes(prevCount => prevCount + 4);
    };

    return (
        <Fragment>
            <BaseWrapper>
                <BackButtonContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.back} onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='icon-back'/>
                    </Button>
                </BackButtonContainer>
                <CategoryTitle>{category ? category.toUpperCase() : ''}</CategoryTitle>
            </BaseWrapper>
            <CategoryWrapper>
                <CategoryContainer>
                    {
                        recipes
                            .slice(0, displayedRecipes)
                            .map(recipe => (
                                <RecipeCardContainer key={recipe.id}>
                                    <RecipeCard recipe={recipe} category={category || ''} />
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
