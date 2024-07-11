import { useParams, useNavigate } from "react-router-dom";
import { deleteCategoryDocument } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { DeleteCategoryPageContainer, DeleteCategoryTitle, DeleteCategoryButtonContainer } from "./delete-category.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faX } from '@fortawesome/free-solid-svg-icons';

const DeleteCategory = () => {
    const { categoryName } = useParams<{ categoryName: string; }>();
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
                <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashCan} className="delete" />
                    Delete
                </Button>
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faX} className="cancel" />
                    Cancel
                </Button>
            </DeleteCategoryButtonContainer>
        </DeleteCategoryPageContainer>
    );
};

export default DeleteCategory;
