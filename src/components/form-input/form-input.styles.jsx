import styled from "styled-components";

export const InputFieldContainer = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;

    & label {
        font-size: 1.2rem;
        color: rgba(133,44,133,1);
        padding-bottom: 10px;

        @media screen and (max-width: 768px) {
            font-size: 1rem;
        }
    }

    & input {
        width: 100%;
        border: 1px solid lightgrey;
        border-radius: 0.5rem;
        outline: none;
        padding: 10px 20px;
        transition: border .5s;

        &:focus {
            border: 1px solid rgba(133,44,133,1);
        }

        &::placeholder {
            font-size: .9rem;

            @media screen and (max-width: 768px) {
                font-size: .7rem;
            }
        }
    }
`