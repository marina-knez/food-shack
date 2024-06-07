import styled from "styled-components";

export const AddRecipePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
`

export const AddRecipeTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const AddRecipeForm = styled.form`
    width: 50%;
`

export const AddRecipeFormSubtitle = styled.h3`
    font-size: 1.5rem;
    color: rgba(133,44,133,1);
    margin: 50px auto 20px auto;
`

export const Textarea = styled.textarea`
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

export const AddRecipeButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 20px 20px 50px 20px;
    }
`

export const AddRecipeSubmitButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & button {
        margin: 50px 20px 0 20px;
    }
`