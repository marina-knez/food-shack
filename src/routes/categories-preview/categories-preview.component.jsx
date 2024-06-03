import { useContext, Fragment, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { RecipesContext } from '../../contexts/recipes.context';

const CategoriesPreview = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const { setCurrentCategory } = useContext(RecipesContext);

    useEffect(() => {
        setCurrentCategory(category);
    }, [category, setCurrentCategory]);

    return (
        <Fragment>
            <Link to='/recipes/add-category'>Add Category</Link>
            {
                Object.keys(categoriesMap).map(categoryName => {
                    const recipes = categoriesMap[categoryName];
                    return (
                        <CategoryPreview key={categoryName} categoryName={categoryName} recipes={recipes} />
                    )
                })
            }
        </Fragment>
    )
};

export default CategoriesPreview;
