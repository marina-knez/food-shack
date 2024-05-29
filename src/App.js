import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Authentication from './routes/authentication/authentication.component';
import Recipes from './routes/recipes/recipes.component';
import AddCategory from './components/add-category/add-category.component';
import UpdateCategory from './components/update-category/update-category.component';
import DeleteCategory from './components/delete-category/delete-category.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='/recipes/*' element={<Recipes />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/update-category/:oldCategoryName" element={<UpdateCategory />} />
        <Route path="/delete-category/:categoryName" element={<DeleteCategory />} />
      </Route>
    </Routes>
  );
}

export default App;
