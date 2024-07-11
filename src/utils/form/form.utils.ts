import { ChangeEvent } from "react";
import { FormFields } from "../../store/recipes/recipe.types";
import { CategoryItemIngredient } from "../../store/categories/category.types";

export const handleFormChange = (
    event: ChangeEvent<HTMLInputElement>, 
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
};
  
export const handleIngredientChange = (
    index: number, 
    field: keyof CategoryItemIngredient, 
    value: string | number, 
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    const newIngredients = formFields.ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setFormFields({ ...formFields, ingredients: newIngredients });
};
  
export const handleInstructionChange = (
    index: number, 
    value: string, 
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    const newInstructions = formFields.instructions.map((instruction, i) =>
        i === index ? value : instruction
    );
    setFormFields({ ...formFields, instructions: newInstructions });
};
  
export const addIngredient = (
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    setFormFields({
      ...formFields,
      ingredients: [...formFields.ingredients, { item: '', quantity: 0, unit: '' }]
    });
};
  
export const removeIngredient = (
    index: number, 
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    const newIngredients = formFields.ingredients.filter((_, i) => i !== index);
    setFormFields({ ...formFields, ingredients: newIngredients });
};
  
export const addInstruction = (
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    setFormFields({
      ...formFields,
      instructions: [...formFields.instructions, '']
    });
};
  
export const removeInstruction = (
    index: number, 
    formFields: FormFields, 
    setFormFields: (fields: FormFields) => void
) => {
    const newInstructions = formFields.instructions.filter((_, i) => i !== index);
    setFormFields({ ...formFields, instructions: newInstructions });
};
  