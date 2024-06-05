import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;
`

export const CategoryPreviewBasics = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 50px;
`

export const CategoryPreviewName = styled.div`
    width: 100%;
`

export const CategoryPreviewTitle = styled(Link)`
    font-size: 2.5rem;
    margin-left: 50px;
    cursor: pointer;
`;

export const CategoryPreviewLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`

export const CategoryPreviewLink = styled(Link)`
    font-size: 1rem;
    cursor: pointer;
    padding: 0 20px;
`

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    margin: 20px 50px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(4, 1fr);
    }
`