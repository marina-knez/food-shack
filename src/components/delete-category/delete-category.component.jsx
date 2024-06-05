import { useParams, useNavigate } from "react-router-dom";
import { deleteCategoryDocument } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { DeleteCategoryPageContainer, DeleteCategoryTitle, DeleteCategoryButtonContainer } from "./delete-category.styles";

const DeleteCategory = () => {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        if(categoryName){
            await deleteCategoryDocument(categoryName);
            navigate('/recipes');
        }
    }

    return (
        <DeleteCategoryPageContainer>
            <DeleteCategoryTitle>Are you sure you want to delete this category?</DeleteCategoryTitle>
            <DeleteCategoryButtonContainer>
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleDelete}>Delete</Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate(-1)}>Cancel</Button>
            </DeleteCategoryButtonContainer>
        </DeleteCategoryPageContainer>
    );
};

export default DeleteCategory;
