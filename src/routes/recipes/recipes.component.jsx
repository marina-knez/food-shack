import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category.component';
import RecipeDetails from '../../components/recipe-details/recipe-details.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';

const Recipes = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      <Route path="/:category/:id" element={<RecipeDetails />} />
    </Routes>
  );
};

export default Recipes;
