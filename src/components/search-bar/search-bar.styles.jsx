import styled from "styled-components";

export const SearchBarContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px auto 0 auto;

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