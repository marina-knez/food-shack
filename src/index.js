import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './index.css';
import App from './App';
import { CategoriesProvider } from './contexts/categories.context';
import { RecipesProvider } from './contexts/recipes.context';
import { ShoppingListProvider } from './contexts/shoppingList.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <CategoriesProvider>
            <RecipesProvider>
              <ShoppingListProvider>
                <App />
              </ShoppingListProvider>
            </RecipesProvider>
          </CategoriesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
