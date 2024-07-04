import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { onCategoriesSnapshot } from '../../utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../store/categories/category.action';
import Category from '../category/category.component';
import RecipeDetails from '../../components/recipe-details/recipe-details.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import AddRecipe from '../../components/add-recipe/add-recipe.component';
import UpdateRecipe from '../../components/update-recipe/update-recipe-component';
import DeleteRecipe from '../../components/delete-recipe/delete-recipe-component';

const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onCategoriesSnapshot((snapshot) => {
        const updatedCategories = snapshot.docs.map((doc) => doc.data());
        dispatch(setCategories(updatedCategories));
    });

    return () => unsubscribe();
}, [dispatch]);

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
