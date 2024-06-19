import styled from 'styled-components';

export const RecipeItemContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;
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

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: 1fr;
        justify-items: center;
        margin: 20px auto;
    }
`

export const RecipeImgWrapper = styled.div`
    height: 600px;

        & img {
            border-radius: 1rem;
            height: 100%;
            object-fit: cover;
        }
    
        @media screen and (max-width:768px) {
            height: 300px;

                & img {
                    height: 100%;
                }
        }
`

export const RecipeItemBasics = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    @media screen and (max-width: 1024px) {
        width: 90%;
        margin: 0 30px;
    }
`

export const RecipeItemInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 1440px) {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
    }
`

export const RecipeItemDescription = styled.p`
    font-size: 1.2rem;
    padding-left: 20px;

    @media screen and (max-width: 1024px) {
        margin-left: 20px;
        padding-left: 0;
    }
`

export const RecipeItemInfo = styled.div`
    font-size: 1.2rem;
    border-radius: 1rem;
    -webkit-box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);
    -moz-box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);
    box-shadow: 5px 5px 20px 5px rgba(133,44,133,1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & p {
        padding: 0 10px 0 0;
    }

    & :nth-child(2) {
        display: block;

        @media screen and (max-width: 1024px){
            display: none;
        }
    }

    & :nth-child(3) {
        @media screen and (max-width: 1024px){
            display: block;
        }
    }

    & .icon {
        padding: 0 10px 3px 10px;
        color: rgba(133, 44, 133, 1);

        @media screen and (max-width: 1024px){
            display: block;
        }
    }

    @media screen and (max-width: 1440px) {
        justify-content: center;
        padding: 0;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1024px) {
        padding: 0 20px;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
        padding: 0 10px;
    }
`

export const RecipeItemDetailsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(1, 100%);
    grid-template-columns: 1fr 2fr;
    grid-gap: 50px;
    padding: 0 50px;
    width: 100%;
    margin: 50px auto;
    font-size: 1.1rem;

    @media screen and (max-width: 1024px) {
        font-size: 1.4rem;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;
        padding: 0 10px;
        grid-gap: 20px;
        margin: 0 auto;
    }
`

export const RecipeItemIngredientsContainer = styled.div`
    padding-left: 50px;

    @media screen and (max-width: 1024px) {
        padding-left: 0;
        font-size: 1.2rem;
    }
`

export const RecipeIngredientsList = styled.ul`
    width: 100%;
    list-style: none;
`

export const RecipeIngredientsListItem = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 10px 0;

    & .cart-icon {
        margin-right: 10px;
        cursor: pointer;
        color: rgba(133,44,133,1);
    }
`

export const RecipeItemIngredientsTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
        padding-left: 10px;
    }
`

export const RecipeItemInstructionsContainer = styled.div`
    padding-right: 50px;
    padding-left: 0;

    @media screen and (max-width: 1024px) {
        padding-right: 20px;
        font-size: 1.2rem;
    }
`

export const RecipeInstructions = styled.div`
    border-left: 2px solid rgba(133,44,133,1);
    margin-bottom: 20px;
    padding-left: 20px;
`

export const RecipeInstructionsList = styled.ul`
    width: 100%;
    list-style: none;
`

export const RecipeInstructionsListItem = styled.li`
    margin-bottom: 10px;

    & .list-icon {
        margin-right: 10px;
        cursor: pointer;
        color: rgba(133,44,133,1);
    }

    &.done {
        text-decoration: line-through;
        color: grey;
    }

    &.undone {
        text-decoration: none;
    }
`

export const RecipeInstructionsStep = styled.p`
    text-transform: uppercase;
    color: rgba(133,44,133,1);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 0;
`

export const RecipeItemInstructionsTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
        padding-left: 10px;
    }
`

export const NotFoundPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    margin: 50px auto;
`

export const NotFoundText = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);
    text-align: center;
`