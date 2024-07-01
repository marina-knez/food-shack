import { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

import { GlobalStyle } from './global.style';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import PrivateRoute from './components/private-route/private-route.component';
import Authentication from './routes/authentication/authentication.component';
import Recipes from './routes/recipes/recipes.component';
import AddCategory from './components/add-category/add-category.component';
import UpdateCategory from './components/update-category/update-category.component';
import DeleteCategory from './components/delete-category/delete-category.component';
import ShoppingList from './routes/shopping-list/shopping-list.component';
import Spinner from './components/spinner/spinner.component';
import Button, { BUTTON_TYPE_CLASSES } from './components/button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));
    });

    return unsubscribe;
}, [dispatch]);


  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Suspense fallback={<Spinner />}>
    <GlobalStyle />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='auth' element={<Authentication />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path='/recipes/*' element={<Recipes />} />
            <Route path="/recipes/add-category" element={<AddCategory />} />
            <Route path="/recipes/update-category/:oldCategoryName" element={<UpdateCategory />} />
            <Route path="/recipes/delete-category/:categoryName" element={<DeleteCategory />} />
            <Route path='/shopping-list' element={<ShoppingList />} />
          </Route>
        </Route>
      </Routes>
      {showScrollToTop && 
        <Button buttonType={BUTTON_TYPE_CLASSES.scroll} onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} className='arrow-up'/>
        </Button>
      }
    </Suspense>
  );
}

export default App;
