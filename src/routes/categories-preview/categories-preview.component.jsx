import { useContext, Fragment } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
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

export default Category;