import { ChangeEvent, FormEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateCategoryDocument } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { UpdateCategoryPageContainer, UpdateCategoryTitle, UpdateCategoryForm, UpdateCategoryButtonContainer } from "./update-category.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

const UpdateCategory = () => {
    const { oldCategoryName } = useParams<{ oldCategoryName?: string; }>();
    const [newCategoryName, setNewCategoryName] = useState<string>('');
    const navigate = useNavigate();

    if (!oldCategoryName) {
        navigate('/recipes');
        return null;
    }

    const handleUpdateCategory = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newCategoryName && newCategoryName !== oldCategoryName) {
            await updateCategoryDocument(oldCategoryName, newCategoryName);
            navigate('/recipes'); 
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                    <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.inverted}>
                        <FontAwesomeIcon icon={faCheck} className="confirm" />
                        Update
                    </Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faX} className="cancel" />
                        Cancel
                    </Button>
                </UpdateCategoryButtonContainer>
            </UpdateCategoryForm>
        </UpdateCategoryPageContainer>
    );
};

export default UpdateCategory;
