import { useContext, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipesContext } from '../../contexts/recipes.context';
import SearchBar from '../../components/search-bar/search-bar.component';

import { AddCategoryContainer, AddCategoryLink, SearchResultsContainer, SearchResultsTitle, SearchResultsItem, SearchResultsItemDetails } from './categories-preview.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CategoriesPreview = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const { setCurrentCategory, searchForRecipes } = useContext(RecipesContext);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearch = async (query) => {
        setQuery(query);

        if (query.trim() === '') {
            setRecipes([]);
            return;
        }

        const fetchedRecipes = await searchForRecipes(query);
        setRecipes(fetchedRecipes);
    };

    useEffect(() => {
        setCurrentCategory(category);
    }, [category, setCurrentCategory]);

    return (
        <Fragment>
            <SearchBar onSearch={handleSearch} />
            {query && (
                <SearchResultsContainer>
                    <SearchResultsTitle>Search Results</SearchResultsTitle>
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <SearchResultsItem to={`/recipes/${category}/${recipe.id}`} key={recipe.id}>
                                <img src={recipe.img} alt={recipe.title} title={recipe.title} />
                                <SearchResultsItemDetails>
                                    <h3>{recipe.title}</h3>
                                    <span><b>Serves:</b> {recipe.noOfPeople}</span>
                                    <span><b>Time:</b> {recipe.time} minutes</span>
                                    <span><b>Difficulty:</b> {recipe.difficulty}</span>
                                </SearchResultsItemDetails>
                            </SearchResultsItem>
                        ))
                    ) : (
                        <p>No recipes found for your search.</p>
                    )}
                </SearchResultsContainer>
            )}
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
