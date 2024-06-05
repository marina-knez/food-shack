import RecipeCard from "../recipe-card/recipe-card.component";
import { CategoryPreviewContainer, CategoryPreviewBasics, CategoryPreviewName, CategoryPreviewTitle, CategoryPreviewLinks, CategoryPreviewLink, Preview } from "./category-preview.styles";

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <CategoryPreviewContainer>
            <CategoryPreviewBasics>
                <CategoryPreviewName>
                    <CategoryPreviewTitle to={`/recipes/${categoryName}`}>{categoryName.toUpperCase()}</CategoryPreviewTitle>
                </CategoryPreviewName>
                <CategoryPreviewLinks>
                    <CategoryPreviewLink to={`/recipes/update-category/${categoryName}`}>Update Category</CategoryPreviewLink>
                    <CategoryPreviewLink to={`/recipes/delete-category/${categoryName}`}>Delete Category</CategoryPreviewLink>
                </CategoryPreviewLinks>
            </CategoryPreviewBasics>
            <Preview>
            {
                recipes
                    .filter((_, idx) => idx < 4)
                    .map(recipe => 
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} category={categoryName} />
                        </div>
                    )
            }
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
