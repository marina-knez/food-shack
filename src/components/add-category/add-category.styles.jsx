import styled, {css} from "styled-components";

export const sharedContainerStyles = css`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
`

export const sharedTitleStyles = css`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const sharedButtonContainerStyles = css`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const sharedFormStyles = css`
    width: 40%;
`

export const AddCategoryPageContainer = styled.div`
    ${sharedContainerStyles}
`

export const AddCategoryTitle = styled.h2`
    ${sharedTitleStyles}
`

export const AddCategoryForm = styled.form`
    ${sharedFormStyles}
`

export const AddCategoryButtonContainer = styled.div`
    ${sharedButtonContainerStyles}
`