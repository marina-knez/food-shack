import styled, {css} from "styled-components";
import { sharedContainerStyles, sharedTitleStyles, sharedButtonContainerStyles } from '../add-category/add-category.styles';

export const sharedTextareaStyles = css`
    border: 1px solid lightgrey;
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    outline: none;
    padding: 10px 20px;
    resize: none;
    font-size: 1rem;
    min-height: 100px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;

    &:focus {
        border: 2px solid rgba(133,44,133,1);
    }

    &::placeholder {
        font-family: Arial, Helvetica, sans-serif;
    }
`

export const UpdateRecipePageContainer = styled.div`
    ${sharedContainerStyles}
`

export const UpdateRecipeTitle = styled.h2`
    ${sharedTitleStyles}
`

export const UpdateRecipeForm = styled.form`
    width: 50%;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const UpdateRecipeFormSubtitle = styled.h3`
    font-size: 1.5rem;
    color: rgba(133,44,133,1);
    margin: 50px auto 20px auto;
`

export const TextareaWrapper = styled.div`
    margin-bottom: 50px;
`

export const Textarea = styled.textarea`
    ${sharedTextareaStyles}
`

export const UpdateRecipeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 20px 20px 50px 20px;

        & .add, .delete {
            padding: 10px 10px 10px 0;
        }

        @media screen and (max-width: 768px) {
            margin: 20px 10px 0 10px;
            padding: 0 20px;
            font-size: .8rem;
        }
    }
`

export const UpdateRecipeSubmitButtonContainer = styled.div`
    ${sharedButtonContainerStyles}

    & button {
        margin: 50px 20px 0 20px;

        & .confirm, .cancel {
            padding: 10px 10px 10px 0;
        }
    }
`