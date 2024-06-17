import styled from "styled-components";

export const SignUpFormTitle = styled.div`
    font-size: 1.5rem;
    color: rgba(133,44,133,1);

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const SignUpFormFieldContainer = styled.form`
    margin-top: 30px;
`

export const SignUpFormButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`