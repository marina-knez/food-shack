import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './index.css';
import App from './App';
import { ShoppingListProvider } from './contexts/shoppingList.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ShoppingListProvider>
          <App />
        </ShoppingListProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
