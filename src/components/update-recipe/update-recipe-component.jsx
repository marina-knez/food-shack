import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, updateRecipe, getRecipeById } from '../../store/recipes/recipe.action';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { UpdateRecipePageContainer, UpdateRecipeTitle, UpdateRecipeForm, UpdateRecipeFormSubtitle, TextareaWrapper, Textarea, UpdateRecipeButtonContainer, UpdateRecipeSubmitButtonContainer } from './update-recipe.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faPlus, faX } from '@fortawesome/free-solid-svg-icons';

const defaultFormFields = {
    title: '',
    description: '',
    img: '',
    noOfPeople: '',
    time: '',
    difficulty: '',
    ingredients: [{ item: '', quantity: '', unit: '' }],
    instructions: [''],
};

const UpdateRecipe = () => {
    const { category, recipeId } = useParams();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (category) {
            dispatch(setCurrentCategory(category));
        }
        
        const fetchRecipe = async () => {
            const recipe = await dispatch(getRecipeById(category, parseInt(recipeId)));
            if (recipe) {
                setFormFields(recipe);
            } else {
                console.error('Recipe not found');
            }
        };
        fetchRecipe();
    }, [category, recipeId, dispatch]);

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
        await dispatch(updateRecipe(category, formFields));
        setFormFields(defaultFormFields);
        navigate(`/recipes/${category}`);
    };

    return (
        <UpdateRecipePageContainer>
            <UpdateRecipeTitle>Update Recipe</UpdateRecipeTitle>
            <UpdateRecipeForm onSubmit={handleSubmit}>
                <FormInput 
                    label="Recipe title"
                    type="text"
                    required
                    onChange={handleChange}
                    name="title"
                    placeholder="Recipe name"
                    value={formFields.title}
                />
                <FormInput 
                    label="Recipe description"
                    type="text"
                    required
                    onChange={handleChange}
                    name="description"
                    placeholder="Recipe description"
                    value={formFields.description}
                />
                <FormInput 
                    label="Recipe image"
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
                    label="How difficult is it to make this recipe?"
                    type="text"
                    required
                    onChange={handleChange}
                    name="difficulty"
                    placeholder="Difficulty"
                    value={formFields.difficulty}
                />

                <div>
                    <UpdateRecipeFormSubtitle>Ingredients</UpdateRecipeFormSubtitle>
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
                            <UpdateRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddIngredient}>
                                    <FontAwesomeIcon icon={faPlus} className="add" />
                                    Add
                                </Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveIngredient(index)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                                    Remove
                                </Button>
                            </UpdateRecipeButtonContainer>
                        </div>
                    ))}
                </div>

                <div>
                    <UpdateRecipeFormSubtitle>Instructions</UpdateRecipeFormSubtitle>
                    {formFields.instructions.map((instruction, index) => (
                        <TextareaWrapper key={index}>
                            <Textarea
                                required
                                value={instruction}
                                onChange={(e) => handleInstructionChange(index, e.target.value)}
                            />
                            <UpdateRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddInstruction}>
                                    <FontAwesomeIcon icon={faPlus} className="add" />
                                    Add
                                </Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveInstruction(index)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                                    Remove
                                </Button>
                            </UpdateRecipeButtonContainer>
                        </TextareaWrapper>
                    ))}
                    
                </div>

                <UpdateRecipeSubmitButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
                        <FontAwesomeIcon icon={faCheck} className="confirm" />
                        Update
                    </Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faX} className="cancel" />
                        Cancel
                    </Button>
                </UpdateRecipeSubmitButtonContainer>
            </UpdateRecipeForm>
        </UpdateRecipePageContainer>
    );
};

export default UpdateRecipe;
