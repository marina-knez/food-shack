import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';

const UpdateRecipe = () => {
    const { category, recipeId } = useParams();
    const { categoriesMap, updateRecipe } = useContext(CategoriesContext);
    const [formFields, setFormFields] = useState({
        title: '',
        img: '',
        noOfPeople: '',
        time: '',
        difficulty: '',
        ingredients: [],
        instructions: []
    });
    const navigate = useNavigate();

    useEffect(() => {
        const recipes = categoriesMap[category.toLowerCase()] || [];
        const recipe = recipes.find(r => r.id === parseInt(recipeId));
        if (recipe) setFormFields(recipe);
    }, [category, recipeId, categoriesMap]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateRecipe(category, formFields);
        navigate(`/recipes/${category}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formFields.title} onChange={handleChange} placeholder="Title" required />
            <input type="text" name="img" value={formFields.img} onChange={handleChange} placeholder="Image URL" required />
            <input type="number" name="noOfPeople" value={formFields.noOfPeople} onChange={handleChange} placeholder="Number of People" required />
            <input type="number" name="time" value={formFields.time} onChange={handleChange} placeholder="Time (minutes)" required />
            <input type="text" name="difficulty" value={formFields.difficulty} onChange={handleChange} placeholder="Difficulty" required />
            {/* Add fields for ingredients and instructions as needed */}
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default UpdateRecipe;
