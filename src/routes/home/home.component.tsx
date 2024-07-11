import { useState } from 'react';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import { HomePageWrapper, RecentlyViewedWrapper, RecentlyViewedContainer, RecentlyViewedTitle, RecentlyAddedWrapper, RecentlyAddedContainer, RecentlyAddedTitle, RandomRecipeWrapper, RandomRecipeButtonContainer } from './home.styles';
import { RecipeCardContainer } from '../category/category.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faX } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { selectRecentlyAdded, selectRecentlyViewed } from '../../store/recipes/recipe.selector';
import { CategoryMap } from '../../store/categories/category.types';
import { Recipe } from '../../store/recipes/recipe.types';

export type RandomRecipeData = {
  recipe: Recipe;
  category: string | null;
  onClick?: () => void;
};

const Home = () => {
  const categoriesMap = useSelector(selectCategoriesMap) as CategoryMap;
  const recentlyViewed = useSelector(selectRecentlyViewed) as Recipe[];
  const recentlyAdded = useSelector(selectRecentlyAdded) as Recipe[];
  const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);
  const [randomRecipeCategory, setRandomRecipeCategory] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  if (!Array.isArray(recentlyViewed)) {
    console.error('Expected recentlyViewed to be an array, but got:', recentlyViewed);
    return <div>Error: recentlyViewed data is invalid</div>;
  }

  const getRandomRecipe = (): RandomRecipeData => {
    const allRecipes = Object.values(categoriesMap).flat();
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomRecipe = allRecipes[randomIndex];
  
    let category: string | null = null;
    for (const [key, recipes] of Object.entries(categoriesMap)) {
      if (recipes.some(recipe => recipe.title === randomRecipe.title)) {
        category = key;
        break;
      }
    }
  
    return { recipe: randomRecipe, category };
  };

  const handleRandomRecipe = () => {
    const { recipe, category } = getRandomRecipe();
    setRandomRecipe(recipe);
    setRandomRecipeCategory(category);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setRandomRecipe(null);
    setRandomRecipeCategory(null);
  };

  const getCategoryForRecipe = (recipe: Recipe): string | null => {
    for (const [key, recipes] of Object.entries(categoriesMap)) {
      if (recipes.some(r => r.title === recipe.title)) {
        return key.toLowerCase();
      }
    }
    return null;
  };

  return (
    <HomePageWrapper>
      <RandomRecipeButtonContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleRandomRecipe}>
          <FontAwesomeIcon icon={faShuffle} className='random' />
        </Button>
      </RandomRecipeButtonContainer>

      {randomRecipe && randomRecipeCategory &&
        <RandomRecipeWrapper open={isDialogOpen}>
          <FontAwesomeIcon icon={faX} className='close' onClick={handleCloseDialog}/>
          <RecipeCardContainer key={randomRecipe.id}>
            <RecipeCard category={randomRecipeCategory} recipe={randomRecipe} onClick={handleCloseDialog} />
          </RecipeCardContainer>
        </RandomRecipeWrapper>
      }

      <RecentlyViewedWrapper>
        <RecentlyViewedTitle>Recently Viewed</RecentlyViewedTitle>
        <RecentlyViewedContainer>
          {recentlyViewed && 
            recentlyViewed.length > 0 ? (
              recentlyViewed.map(recipe => (
                <RecipeCardContainer key={recipe.id}>
                  <RecipeCard category={getCategoryForRecipe(recipe) || ''} recipe={recipe} />
                </RecipeCardContainer>
              ))
            ) : (
              <span>No recently viewed recipes</span>
            )
          }
        </RecentlyViewedContainer>
      </RecentlyViewedWrapper>

      <RecentlyAddedWrapper>
        <RecentlyAddedTitle>Recently Added</RecentlyAddedTitle>
        <RecentlyAddedContainer>
          {recentlyAdded.map(recipe => (
            <RecipeCardContainer key={recipe.id}>
              <RecipeCard key={recipe.id} category={getCategoryForRecipe(recipe) || ''} recipe={recipe} />
            </RecipeCardContainer>
          ))}
        </RecentlyAddedContainer>
      </RecentlyAddedWrapper>
    </HomePageWrapper>
  );
};

export default Home;
