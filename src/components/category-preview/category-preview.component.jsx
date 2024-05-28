import RecipeCard from "../recipe-card/recipe-card.component";

const CategoryPreview = ({ categoryName, recipes }) => {
    return (
        <div>
            <h2>
                <span>{categoryName.toUpperCase()}</span>
            </h2>
            {
                recipes
                    .filter((_, idx) => idx < 4)
                    .map(recipe => 
                        <RecipeCard key={recipe.id} recipe={recipe} category={categoryName} />
                    )
            }
        </div>
    )
};

export default CategoryPreview;