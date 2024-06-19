import RecipeCard from "../recipe-card/recipe-card.component";
import { CategoryPreviewContainer, CategoryPreviewBasics, CategoryPreviewName, CategoryPreviewTitle, CategoryPreviewLinks, CategoryPreviewLink, PreviewWrapper, Preview, RecipeCardContainer,  AddRecipeLinkContainer, AddRecipeLink } from "./category-preview.styles";
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan, faPlus } from '@fortawesome/free-solid-svg-icons';

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <CategoryPreviewContainer>
            <CategoryPreviewBasics>
                <CategoryPreviewName>
                    <CategoryPreviewTitle to={`/recipes/${categoryName}`}>{categoryName.toUpperCase()}</CategoryPreviewTitle>
                </CategoryPreviewName>
                <CategoryPreviewLinks>
                    <CategoryPreviewLink to={`/recipes/update-category/${categoryName}`}>
                        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
                            <FontAwesomeIcon icon={faPenToSquare} className="edit" />
                        </Button>
                    </CategoryPreviewLink>
                    <CategoryPreviewLink to={`/recipes/delete-category/${categoryName}`}>
                        <Button buttonType={BUTTON_TYPE_CLASSES.base}>
                            <FontAwesomeIcon icon={faTrashCan} className="delete" />
                        </Button>
                    </CategoryPreviewLink>
                </CategoryPreviewLinks>
            </CategoryPreviewBasics>
            <PreviewWrapper>
                <Preview>
                {
                    recipes
                        .filter((_, idx) => idx < 4)
                        .map(recipe => 
                            <RecipeCardContainer key={recipe.id}>
                                <RecipeCard recipe={recipe} category={categoryName} />
                            </RecipeCardContainer>
                        )
                }
                </Preview>
                <AddRecipeLinkContainer>
                    <AddRecipeLink to={`/recipes/${categoryName}/add-recipe`}>
                        <FontAwesomeIcon icon={faPlus} className='add' />
                        Add Recipe
                    </AddRecipeLink>
                </AddRecipeLinkContainer>
            </PreviewWrapper>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
