import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipesContext } from '../../contexts/recipes.context';

const defaultFormFields = {
    title: '',
    img: '',
    noOfPeople: '',
    time: '',
    difficulty: '',
    ingredients: [],
    instructions: [],
};

const AddRecipe = () => {
    const { category } = useParams();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { setCurrentCategory, addRecipe } = useContext(RecipesContext);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentCategory(category);
    }, [category, setCurrentCategory]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addRecipe(formFields);
        setFormFields(defaultFormFields);
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
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
