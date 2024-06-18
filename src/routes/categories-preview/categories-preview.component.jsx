import { useContext, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/categories.context';
import SearchBar from '../../components/search-bar/search-bar.component';

import { AddCategoryContainer, AddCategoryLink, SearchResultsContainer, SearchResultsTitle, SearchResultsItem, SearchResultsItemDetails } from './categories-preview.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RecipesContext } from '../../contexts/recipes.context';

const CategoriesPreview = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const { setCurrentCategory } = useContext(RecipesContext);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

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
        setCurrentCategory(category);
    }, [category, setCurrentCategory]);

    return (
        <Fragment>
            <SearchBar onSearch={handleSearch} />
            {query && (
                <SearchResultsContainer>
                    <SearchResultsTitle>Search Results</SearchResultsTitle>
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => {
                            console.log(`Rendering Recipe: ${recipe.title} in Category: ${recipe.category}`);
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
