import RecipeCard from "../recipe-card/recipe-card.component";
import { CategoryPreviewContainer, CategoryPreviewBasics, CategoryPreviewName, CategoryPreviewTitle, CategoryPreviewLinks, CategoryPreviewLink, Preview, AddRecipeLinkContainer, AddRecipeLink } from "./category-preview.styles";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <CategoryPreviewContainer>
            <CategoryPreviewBasics>
                <CategoryPreviewName>
                    <CategoryPreviewTitle to={`/recipes/${categoryName}`}>{categoryName.toUpperCase()}</CategoryPreviewTitle>
                </CategoryPreviewName>
                <CategoryPreviewLinks>
                    <CategoryPreviewLink to={`/recipes/update-category/${categoryName}`}>
                        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Update Category</Button>
                    </CategoryPreviewLink>
                    <CategoryPreviewLink to={`/recipes/delete-category/${categoryName}`}>
                        <Button buttonType={BUTTON_TYPE_CLASSES.base}>Delete Category</Button>
                    </CategoryPreviewLink>
                </CategoryPreviewLinks>
            </CategoryPreviewBasics>
            <Preview>
            {
                recipes
                    .filter((_, idx) => idx < 3)
                    .map(recipe => 
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} category={categoryName} />
                        </div>
                    )
            }
            <AddRecipeLinkContainer>
                <AddRecipeLink to={`/recipes/${categoryName}/add-recipe`}>Add Recipe</AddRecipeLink>
            </AddRecipeLinkContainer>
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
