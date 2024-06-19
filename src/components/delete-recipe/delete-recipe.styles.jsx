import styled from "styled-components";
import { sharedContainerStyles, sharedTitleStyles, sharedButtonContainerStyles, sharedFormStyles } from '../add-category/add-category.styles';

export const DeleteRecipePageContainer = styled.div`
    ${sharedContainerStyles}
`

export const DeleteRecipeTitle = styled.h2`
    ${sharedTitleStyles}
`

export const DeleteRecipeForm = styled.form`
    ${sharedFormStyles}
`

export const DeleteRecipeButtonContainer = styled.div`
    ${sharedButtonContainerStyles}

    & button {
        margin: 0 50px;

        & .delete, .cancel {
            padding: 10px 10px 10px 0;
        }
    }
`