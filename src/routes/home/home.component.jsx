import { useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipesContext } from '../../contexts/recipes.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import { HomePageWrapper, RecentlyViewedWrapper, RecentlyViewedContainer, RecentlyViewedTitle, RecentlyAddedWrapper, RecentlyAddedContainer, RecentlyAddedTitle, RandomRecipeWrapper, RandomRecipeButtonContainer } from './home.styles';
import { RecipeCardContainer } from '../category/category.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faX } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  const { recentlyViewed, recentlyAdded } = useContext(RecipesContext);
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [randomRecipeCategory, setRandomRecipeCategory] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const getRandomRecipe = () => {
    const allRecipes = Object.values(categoriesMap).flat();
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomRecipe = allRecipes[randomIndex];

    let category = null;
    for (const [key, recipes] of Object.entries(categoriesMap)) {
      if (recipes.find(recipe => recipe.id === randomRecipe.id)) {
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
    setRandomRecipeCategory(null); // Reset category when closing dialog
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
            <RecipeCard category={randomRecipeCategory} recipe={randomRecipe} />
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
                  <RecipeCard category={recipe.category} recipe={recipe} />
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
              <RecipeCard key={recipe.id} category={recipe.category} recipe={recipe} />
            </RecipeCardContainer>
          ))}
        </RecentlyAddedContainer>
      </RecentlyAddedWrapper>
    </HomePageWrapper>
  );
};

export default Home;
