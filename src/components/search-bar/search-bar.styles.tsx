import styled from "styled-components";

export const SearchBarContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px 0;

    @media screen and (max-width: 480px) {
        margin: 15px 0;
    }

    & div {
        flex-direction: row-reverse;
        width: 70%;
        position: relative;

        & label {
            position: absolute;
            padding: 5px 10px;
            cursor: pointer;
        }

        @media screen and (max-width: 768px) {
            width: 100%;

            & label {
                padding: 7px 10px;
            }
        }
    
    }
`