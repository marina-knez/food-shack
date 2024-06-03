import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';

const DeleteRecipe = () => {
    const { category, recipeId } = useParams();
    const { deleteRecipe } = useContext(CategoriesContext);
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteRecipe(category, parseInt(recipeId));
        navigate(`/recipes/${category}`);
    };

    return (
        <div>
            <h2>Are you sure you want to delete this recipe?</h2>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </div>
    );
};

export default DeleteRecipe;
