import styled from 'styled-components';

export const RecipeItemContainer = styled.div`
    width: 100%;
`

export const RecipeItemTitle = styled.h2`
    font-size: 3rem;
    color: rgba(133,44,133,1);
    text-align: center;
`

export const RecipeItemBasicsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-items: center;
    margin: 50px;

    & div {
        height: 600px;

        & img {
            border-radius: 1rem;
            height: 100%;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        margin: 20px;

        & div {
            height: 500px;

            & img {
                height: 60%;
            }
        }
    }
`

export const RecipeItemBasics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;

    @media screen and (max-width: 1024px) {
        margin: 0 20px;
    }
`

export const RecipeItemInfo = styled.p`
    font-size: 1.2rem;
    padding: 45px;
    text-align: center;
    border-radius: 1rem;
    -webkit-box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);
    -moz-box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);
    box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const RecipeItemDetailsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 100%);
    grid-template-columns: repeat(1, 1fr 2fr);
    grid-gap: 50px;
    width: 100%;
    margin: 50px;
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
    }
`

export const RecipeItemIngredientsContainer = styled.div`
    padding: 0 30px;
`

export const RecipeItemInstructionsContainer = styled.div`
    padding: 0 20px;
`

export const RecipeItemIngredientsTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
`

export const RecipeItemInstructionsTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
`