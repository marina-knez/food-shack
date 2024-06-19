import styled from "styled-components";

export const SignInFormTitle = styled.div`
    font-size: 1.5rem;
    color: rgba(133,44,133,1);

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const SignInFormFieldContainer = styled.form`
    margin-top: 30px;
`

export const SignInFormButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;

        & button {
            margin-bottom: 15px;
        }
    }
`