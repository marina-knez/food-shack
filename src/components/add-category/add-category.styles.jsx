import styled from "styled-components";

export const AddCategoryPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
`

export const AddCategoryTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const AddCategoryForm = styled.form`
    width: 40%;
`

export const AddCategoryButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 0 50px;
    }
`