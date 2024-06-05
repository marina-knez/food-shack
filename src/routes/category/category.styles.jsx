import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    margin: 50px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 1fr);
    }
`

export const CategoryTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
`