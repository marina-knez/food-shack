import styled, {css} from "styled-components";

export const sharedContainerStyles = css`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto 100px auto;
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

    @media screen and (max-width: 1200px) {
        justify-content: space-around;
    }
`

export const sharedFormStyles = css`
    width: 40%;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }
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

    & button {
        margin: 20px 20px 50px 20px;

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