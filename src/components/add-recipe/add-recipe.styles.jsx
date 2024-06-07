import styled from "styled-components";
import { sharedContainerStyles, sharedTitleStyles, sharedButtonContainerStyles } from '../add-category/add-category.styles';
import { sharedTextareaStyles } from "../update-recipe/update-recipe.styles";

export const AddRecipePageContainer = styled.div`
    ${sharedContainerStyles}
`

export const AddRecipeTitle = styled.h2`
    ${sharedTitleStyles}
`

export const AddRecipeForm = styled.form`
    width: 50%;
`

export const AddRecipeFormSubtitle = styled.h3`
    font-size: 1.5rem;
    color: rgba(133,44,133,1);
    margin: 50px auto 20px auto;
`

export const Textarea = styled.textarea`
    ${sharedTextareaStyles}
`

export const AddRecipeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 20px 20px 50px 20px;
    }
`

export const AddRecipeSubmitButtonContainer = styled.div`
    ${sharedButtonContainerStyles}

    & button {
        margin: 50px 20px 0 20px;
    }
`