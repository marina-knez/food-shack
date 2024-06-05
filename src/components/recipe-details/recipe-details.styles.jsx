import styled from 'styled-components';

export const RecipeItemContainer = styled.div`
    width: 100%;
`

export const RecipeItemBasicsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 50px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        margin: 20px;

        & div {
            & img {
                height: 80%;
                object-fit: cover;
            }
        }
    }
`

export const RecipeItemDetailsContainer = styled.div`
    margin: 50px;
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const RecipeItemBasics = styled.div`
    margin: 0 50px;

    @media screen and (max-width: 1024px) {
        margin: 0 20px;
    }
`

export const RecipeItemTitle = styled.h2`
    font-size: 3rem;
    color: #333f48;
`

export const RecipeItemInfo = styled.p`
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`