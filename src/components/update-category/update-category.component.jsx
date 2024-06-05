import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateCategoryDocument } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UpdateCategoryPageContainer, UpdateCategoryTitle, UpdateCategoryForm, UpdateCategoryButtonContainer } from "./update-category.styles";

const UpdateCategory = () => {
    const { oldCategoryName } = useParams();
    const [newCategoryName, setNewCategoryName] = useState(oldCategoryName);
    const navigate = useNavigate();

    const handleUpdateCategory = async (e) => {
        e.preventDefault();
        if (newCategoryName && newCategoryName !== oldCategoryName) {
            await updateCategoryDocument(oldCategoryName, newCategoryName);
            navigate('/recipes'); 
        }
    };

    const handleChange = (e) => {
        setNewCategoryName(e.target.value);
    };

    return (
        <UpdateCategoryPageContainer>
            <UpdateCategoryTitle>Update Category Name</UpdateCategoryTitle>
            <UpdateCategoryForm onSubmit={handleUpdateCategory}>
                <FormInput 
                label="Update Category Name"
                type="text"
                required
                onChange={handleChange}
                name="category"
                placeholder="Chose new Category name"
                value={newCategoryName}
                />
                <UpdateCategoryButtonContainer>
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>Update Category</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>Cancel</Button>
                </UpdateCategoryButtonContainer>
            </UpdateCategoryForm>
        </UpdateCategoryPageContainer>
    );
};

export default UpdateCategory;
