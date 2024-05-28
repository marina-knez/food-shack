import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../../components/recipe-card/recipe-card.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            {
                recipes && 
                    recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} category={category} />
                    ))
            }
        </Fragment>
    )
};

export default Category;