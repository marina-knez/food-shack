import styled from "styled-components";
import { sharedContainerStyles, sharedTitleStyles, sharedButtonContainerStyles } from '../add-category/add-category.styles';

export const DeleteCategoryPageContainer = styled.div`
    ${sharedContainerStyles}
`

export const DeleteCategoryTitle = styled.h2`
    ${sharedTitleStyles}
`

export const DeleteCategoryButtonContainer = styled.div`
    ${sharedButtonContainerStyles}
    
    & button {
        margin: 0 50px;

        & .delete, .cancel {
            padding: 10px 10px 10px 0;
        }
    }
`