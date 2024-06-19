import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category.component';
import RecipeDetails from '../../components/recipe-details/recipe-details.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import AddRecipe from '../../components/add-recipe/add-recipe.component';
import UpdateRecipe from '../../components/update-recipe/update-recipe-component';
import DeleteRecipe from '../../components/delete-recipe/delete-recipe-component';

const Recipes = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path=':category/:id' element={<RecipeDetails />} />
      <Route path=':category/add-recipe' element={<AddRecipe />} />
      <Route path=':category/update-recipe/:recipeId' element={<UpdateRecipe />} />
      <Route path=':category/delete-recipe/:recipeId' element={<DeleteRecipe />} />
    </Routes>
  );
};

export default Recipes;
