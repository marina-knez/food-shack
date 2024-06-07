import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RecipesContext } from '../../contexts/recipes.context';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES} from '../button/button.component';

import { AddRecipePageContainer, AddRecipeTitle, AddRecipeForm, AddRecipeFormSubtitle, Textarea, AddRecipeButtonContainer, AddRecipeSubmitButtonContainer } from './add-recipe.styles';

const defaultFormFields = {
    title: '',
    img: '',
    noOfPeople: '',
    time: '',
    difficulty: '',
    ingredients: [{ item: '', quantity: '', unit: ''}],
    instructions: [''],
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

    const handleIngredientChange = (index, field, value) => {
        const newIngredients = formFields.ingredients.map((ingredient, i) => (
            i === index ? { ...ingredient, [field]: value } : ingredient
        ));
        setFormFields({ ...formFields, ingredients: newIngredients });
    };

    const handleInstructionChange = (index, value) => {
        const newInstructions = formFields.instructions.map((instruction, i) => (
            i === index ? value : instruction
        ));
        setFormFields({ ...formFields, instructions: newInstructions });
    };

    const handleAddIngredient = () => {
        setFormFields({
            ...formFields,
            ingredients: [...formFields.ingredients, { item: '', quantity: '', unit: '' }]
        });
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = formFields.ingredients.filter((_, i) => i !== index);
        setFormFields({ ...formFields, ingredients: newIngredients });
    };

    const handleAddInstruction = () => {
        setFormFields({
            ...formFields,
            instructions: [...formFields.instructions, '']
        });
    };

    const handleRemoveInstruction = (index) => {
        const newInstructions = formFields.instructions.filter((_, i) => i !== index);
        setFormFields({ ...formFields, instructions: newInstructions });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addRecipe(formFields);
        setFormFields(defaultFormFields);
        navigate(`/recipes/${category}`);
    };

    return (
        <AddRecipePageContainer>
            <AddRecipeTitle>Add new Recipe to your collection</AddRecipeTitle>
            <AddRecipeForm onSubmit={handleSubmit}>
                <FormInput 
                    label="Add Recipe title"
                    type="text"
                    required
                    onChange={handleChange}
                    name="title"
                    placeholder="Chose new Recipe name"
                    value={formFields.title}
                />
                <FormInput 
                    label="Add Recipe image"
                    type="text"
                    required
                    onChange={handleChange}
                    name="img"
                    placeholder="Paste image url here"
                    value={formFields.img}
                />
                <FormInput 
                    label="How many people this recipe serves?"
                    type="number"
                    required
                    onChange={handleChange}
                    name="noOfPeople"
                    placeholder="Number of people"
                    value={formFields.noOfPeople}
                />
                <FormInput 
                    label="How long does it take to make this recipe?"
                    type="number"
                    required
                    onChange={handleChange}
                    name="time"
                    placeholder="Time in minutes"
                    value={formFields.time}
                />
                <FormInput 
                    label="How difficult it is to make this recipe?"
                    type="text"
                    required
                    onChange={handleChange}
                    name="difficulty"
                    placeholder="Difficulty"
                    value={formFields.difficulty}
                />
                <div>
                    <AddRecipeFormSubtitle>Ingredients</AddRecipeFormSubtitle>
                    {formFields.ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <FormInput
                                label="Item"
                                type="text"
                                required
                                value={ingredient.item}
                                onChange={(e) => handleIngredientChange(index, 'item', e.target.value)}
                            />
                            <FormInput
                                label="Quantity"
                                type="text"
                                required
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                            />
                            <FormInput
                                label="Unit"
                                type="text"
                                value={ingredient.unit}
                                onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                            />
                            <AddRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddIngredient}>Add Ingredient</Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveIngredient(index)}>Remove Ingredient</Button>
                            </AddRecipeButtonContainer>
                        </div>
                    ))}
                </div>

                <div>
                    <AddRecipeFormSubtitle>Instructions</AddRecipeFormSubtitle>
                    {formFields.instructions.map((instruction, index) => (
                        <div key={index}>
                            <Textarea
                                required
                                value={instruction}
                                onChange={(e) => handleInstructionChange(index, e.target.value)}
                            />
                            <AddRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddInstruction}>Add Instruction</Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveInstruction(index)}>Remove Instruction</Button>
                            </AddRecipeButtonContainer>
                        </div>
                    ))}
                </div>
                <AddRecipeSubmitButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Add Recipe</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>Cancel</Button>
                </AddRecipeSubmitButtonContainer>
            </AddRecipeForm>
        </AddRecipePageContainer>
    );
};

export default AddRecipe;
