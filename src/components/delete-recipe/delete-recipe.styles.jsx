import styled from "styled-components";

export const DeleteRecipePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin: 50px auto;
`

export const DeleteRecipeTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const DeleteRecipeForm = styled.form`
    width: 40%;
`

export const DeleteRecipeButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 0 50px;
    }
`