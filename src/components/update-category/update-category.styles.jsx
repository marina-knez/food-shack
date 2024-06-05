import styled from "styled-components";

export const UpdateCategoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
`

export const UpdateCategoryTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const UpdateCategoryForm = styled.form`
    width: 40%;
`

export const UpdateCategoryButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 0 50px;
    }
`