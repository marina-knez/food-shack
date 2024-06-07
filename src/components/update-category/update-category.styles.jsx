import styled from "styled-components";
import { sharedContainerStyles, sharedTitleStyles, sharedButtonContainerStyles, sharedFormStyles } from '../add-category/add-category.styles';

export const UpdateCategoryPageContainer = styled.div`
    ${sharedContainerStyles}
`

export const UpdateCategoryTitle = styled.h2`
    ${sharedTitleStyles}
`

export const UpdateCategoryForm = styled.form`
    ${sharedFormStyles}
`

export const UpdateCategoryButtonContainer = styled.div`
    ${sharedButtonContainerStyles}

    & button {
        margin: 0 50px;
    }
`