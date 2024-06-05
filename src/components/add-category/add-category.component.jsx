import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategoryDocument } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { AddCategoryPageContainer, AddCategoryTitle, AddCategoryForm, AddCategoryButtonContainer } from './add-category.styles';

const AddCategory = () => {
    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();

    const handleAddCategory = async (event) => {
        event.preventDefault();
        if (categoryName.trim()) {
            await createCategoryDocument(categoryName.trim());
            navigate('/recipes');
        }
    };

    const handleChange = (e) => {
        setCategoryName(e.target.value);
    };

    return (
        <AddCategoryPageContainer>
            <AddCategoryTitle>Add new Category</AddCategoryTitle>
            <AddCategoryForm onSubmit={handleAddCategory}>
                <FormInput 
                label="Add Category Name"
                type="text"
                required
                onChange={handleChange}
                name="category"
                placeholder="Chose new Category name"
                value={categoryName}
                />
                <AddCategoryButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Add Category</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>Cancel</Button>
                </AddCategoryButtonContainer>
            </AddCategoryForm>
        </AddCategoryPageContainer>
    );
};

export default AddCategory;
