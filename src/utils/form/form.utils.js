export const handleFormChange = (event, formFields, setFormFields) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
};
  
export const handleIngredientChange = (index, field, value, formFields, setFormFields) => {
    const newIngredients = formFields.ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setFormFields({ ...formFields, ingredients: newIngredients });
};
  
export const handleInstructionChange = (index, value, formFields, setFormFields) => {
    const newInstructions = formFields.instructions.map((instruction, i) =>
        i === index ? value : instruction
    );
    setFormFields({ ...formFields, instructions: newInstructions });
};
  
export const addIngredient = (formFields, setFormFields) => {
    setFormFields({
      ...formFields,
      ingredients: [...formFields.ingredients, { item: '', quantity: 0, unit: '' }]
    });
};
  
export const removeIngredient = (index, formFields, setFormFields) => {
    const newIngredients = formFields.ingredients.filter((_, i) => i !== index);
    setFormFields({ ...formFields, ingredients: newIngredients });
};
  
export const addInstruction = (formFields, setFormFields) => {
    setFormFields({
      ...formFields,
      instructions: [...formFields.instructions, '']
    });
};
  
export const removeInstruction = (index, formFields, setFormFields) => {
    const newInstructions = formFields.instructions.filter((_, i) => i !== index);
    setFormFields({ ...formFields, instructions: newInstructions });
};
  