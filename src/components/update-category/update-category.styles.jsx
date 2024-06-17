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

        & .confirm, .cancel {
            padding: 10px 10px 10px 0;
        }

        @media screen and (max-width: 768px) {
            margin: 20px 10px 0 10px;
            padding: 0 20px;
            font-size: .8rem;
        }
    }
`