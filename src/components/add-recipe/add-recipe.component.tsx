import { ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { selectFormFields } from '../../store/recipes/recipe.selector';
import { setCurrentCategory, addRecipe, fetchRecentlyAddedRecipes, setFormFields } from '../../store/recipes/recipe.action';
import FormInput from '../form-input/form-input.component';
import { handleFormChange, handleIngredientChange, handleInstructionChange, addIngredient, removeIngredient, addInstruction, removeInstruction } from '../../utils/form/form.utils';
import Button, { BUTTON_TYPE_CLASSES} from '../button/button.component';

import { AddRecipePageContainer, AddRecipeTitle, AddRecipeForm, AddRecipeFormSubtitle, Textarea, AddRecipeButtonContainer, AddRecipeSubmitButtonContainer } from './add-recipe.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashCan, faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { CategoryItemIngredient } from '../../store/categories/category.types';

const AddRecipe = () => {
    const { category } = useParams<{ category: string; }>();
    const formFields = useSelector(selectFormFields);
    const navigate = useNavigate();
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

    useEffect(() => {
        if (category) {
            dispatch(setCurrentCategory(category));
        }
    }, [category, dispatch]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        handleFormChange(event, formFields, (fields) => 
            dispatch(setFormFields(fields)));
    };

    const handleIngredientChangeWrapper = (index: number, field: keyof CategoryItemIngredient, value: string) => {
        handleIngredientChange(index, field, value, formFields, (fields) => 
        dispatch(setFormFields(fields)));
    };

    const handleInstructionChangeWrapper = (index: number, value: string) => {
        handleInstructionChange(index, value, formFields, (fields) => 
        dispatch(setFormFields(fields)));
    };

    const handleAddIngredient = () => {
        addIngredient(formFields, (fields) => 
        dispatch(setFormFields(fields)));
    };

    const handleRemoveIngredient = (index: number) => {
        removeIngredient(index, formFields, (fields) =>
        dispatch(setFormFields(fields)));
    };

    const handleAddInstruction = () => {
        addInstruction(formFields, (fields) => 
        dispatch(setFormFields(fields)));
    };

    const handleRemoveInstruction = (index: number) => {
        removeInstruction(index, formFields, (fields) => 
        dispatch(setFormFields(fields)));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (category) {
            await dispatch(addRecipe(category, formFields));
            dispatch(fetchRecentlyAddedRecipes());
            dispatch(setFormFields({
                id: Date.now(),
                title: '',
                description: '',
                img: '',
                noOfPeople: 0,
                time: 0,
                difficulty: '',
                ingredients: [{ item: '', quantity: 0, unit: '' }],
                instructions: [''],
                dateAdded: new Date()
            }));
            navigate(`/recipes/${category}`);
        } else {
            console.error('Category is undefined');
        }
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
                    label="Add Recipe description"
                    type="text"
                    required
                    onChange={handleChange}
                    name="description"
                    placeholder="Add Recipe Description"
                    value={formFields.description}
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
                                onChange={(e) => handleIngredientChangeWrapper(index, 'item', e.target.value)}
                            />
                            <FormInput
                                label="Quantity"
                                type="text"
                                required
                                value={ingredient.quantity}
                                onChange={(e) => handleIngredientChangeWrapper(index, 'quantity', e.target.value)}
                            />
                            <FormInput
                                label="Unit"
                                type="text"
                                value={ingredient.unit}
                                onChange={(e) => handleIngredientChangeWrapper(index, 'unit', e.target.value)}
                            />
                            <AddRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddIngredient}>
                                    <FontAwesomeIcon icon={faPlus} className="add" />
                                    Add
                                </Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveIngredient(index)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                                    Remove
                                </Button>
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
                                onChange={(e) => handleInstructionChangeWrapper(index, e.target.value)}
                            />
                            <AddRecipeButtonContainer>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddInstruction}>
                                    <FontAwesomeIcon icon={faPlus} className="add" />
                                    Add
                                </Button>
                                <Button type="button" buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => handleRemoveInstruction(index)}>
                                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                                    Remove
                                </Button>
                            </AddRecipeButtonContainer>
                        </div>
                    ))}
                </div>
                <AddRecipeSubmitButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
                        <FontAwesomeIcon icon={faCheck} className="confirm" />
                        Add Recipe
                    </Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faX} className="cancel" />
                        Cancel
                    </Button>
                </AddRecipeSubmitButtonContainer>
            </AddRecipeForm>
        </AddRecipePageContainer>
    );
};

export default AddRecipe;
