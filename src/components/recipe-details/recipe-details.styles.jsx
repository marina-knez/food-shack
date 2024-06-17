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

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(1, 100%);
        grid-template-rows: 1fr 100px;
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
    width: 60%;

    @media screen and (max-width: 1024px) {
        width: 90%;
        margin: 0 20px;
        flex-direction: row;
        height: 100px;
    }

    @media screen and (max-width: 768px) {
        height: 65px;
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
        padding: 15px 20px;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 768px) {
        font-size: .8rem;
        padding: 10px 20px;
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
        padding-left: 20px;
        font-size: 1.2rem;
    }
`

export const RecipeIngredientsList = styled.ul`
    width: 100%;

`

export const RecipeIngredientsListItem = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 10px 0;
`

export const RecipeItemIngredientsTitle = styled.h2`
    font-size: 2rem;
    color: rgba(133,44,133,1);

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }
`

export const RecipeItemInstructionsContainer = styled.div`
    padding-right: 50px;
    padding-left: 0;

    @media screen and (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 1.2rem;
    }
`

export const RecipeInstructions = styled.div`
    border-left: 2px solid rgba(133,44,133,1);
    margin-bottom: 20px;
    padding-left: 20px;
`

export const RecipeInstructionsList = styled.ol`
    width: 100%;
    list-style-type: none;
`

export const RecipeInstructionsListItem = styled.li`
    margin-bottom: 10px;
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