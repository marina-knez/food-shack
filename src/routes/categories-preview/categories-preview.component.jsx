import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory } from '../../store/recipes/recipe.action';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import SearchBar from '../../components/search-bar/search-bar.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

import { Wrapper, BackButtonContainer, AddCategoryContainer, AddCategoryLink, SearchResultsContainer, SearchResultsTitle, SearchResultsItem, SearchResultsItemDetails } from './categories-preview.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goBack = () => {
        navigate('/');
    };

    const searchRecipesLocally = (queryStr) => {
        const allRecipes = Object.entries(categoriesMap).flatMap(([category, recipes]) =>
            recipes.map(recipe => ({ ...recipe, category }))
        );

        const searchResults = allRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(queryStr.toLowerCase())
        );

        return searchResults;
    };

    const handleSearch = (query) => {
        setQuery(query);

        if (query.trim() === '') {
            setRecipes([]);
            return;
        }

        const fetchedRecipes = searchRecipesLocally(query);
        setRecipes(fetchedRecipes);
    };

    useEffect(() => {
        if (category) {
            dispatch(setCurrentCategory(category));
        }
    }, [category, dispatch]);

    return (
        <Fragment>
            <Wrapper>
                <BackButtonContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.back} onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='icon-back'/>
                    </Button>
                </BackButtonContainer>
                <SearchBar onSearch={handleSearch} />
                {query && (
                    <SearchResultsContainer>
                        <SearchResultsTitle>Search Results</SearchResultsTitle>
                        {recipes.length > 0 ? (
                            recipes.map((recipe) => {
                                return (
                                    <SearchResultsItem to={`/recipes/${recipe.category}/${recipe.id}`} key={recipe.id}>
                                        <img src={recipe.img} alt={recipe.title} title={recipe.title} />
                                        <SearchResultsItemDetails>
                                            <h3>{recipe.title}</h3>
                                            <div>
                                                <span><b>Serves:</b> {recipe.noOfPeople}</span>
                                                <span><b>Time:</b> {recipe.time} minutes</span>
                                                <span><b>Difficulty:</b> {recipe.difficulty}</span>
                                            </div>
                                        </SearchResultsItemDetails>
                                    </SearchResultsItem>
                                );
                            })
                        ) : (
                            <p>No recipes found for your search.</p>
                        )}
                    </SearchResultsContainer>
                )}
            </Wrapper>
            <AddCategoryContainer>
                <AddCategoryLink to='/recipes/add-category'>
                    <FontAwesomeIcon icon={faPlus} className='add' />
                    Add Category
                </AddCategoryLink>
            </AddCategoryContainer>
            {Object.keys(categoriesMap).map(categoryName => {
                const recipes = categoriesMap[categoryName];
                return (
                    <CategoryPreview key={categoryName} categoryName={categoryName} recipes={recipes} />
                )
            })}
        </Fragment>
    );
};

export default CategoriesPreview;