import { useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import RecipeCard from '../../components/recipe-card/recipe-card.component';

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [randomRecipe, setRandomRecipe] = useState(null);

  const getRandomRecipe = () => {
    const allRecipes = Object.values(categoriesMap).flat();
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    return allRecipes[randomIndex];
};

const handleRandomRecipe = () => {
    const randomRecipe = getRandomRecipe();
    setRandomRecipe(randomRecipe);
};

  return (
    <div>
      <h1>Home page</h1>
      <div>
                <button onClick={handleRandomRecipe}>Get Random Recipe</button>
            </div>

            {randomRecipe && <RecipeCard recipe={randomRecipe} />}
    </div>
  );
};

export default Home;