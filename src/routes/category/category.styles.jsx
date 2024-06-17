import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { sharedButtonContainerStyles } from '../../components/add-category/add-category.styles';

export const sharedContainerStyles = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 50px;
    align-items: center;
    justify-items: center;
    margin: 20px auto;
    width: 100%;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        margin: 20px auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`

export const sharedCardContainerStyles = css`
    width: 100%;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }
`

export const sharedRecipeLinkContainerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 200px;
    margin-left: 50px;
    height: 70px;
    width: 300px;
    border: 4px solid rgba(240, 201, 240, 1);
    border-radius: 1rem;
    scale: 1;
    transition: scale .5s;

    &:hover {
        scale: 1.1;
    }

    @media screen and (max-width: 1024px) {
        margin-top: 30px;
        margin-left: 25px;
        width: 200px;
        border-radius: .8rem;
    }

    @media screen and (max-width: 768px) {
        margin: 30px auto;
    }
`

export const sharedRecipeLinkStyles = css`
    font-weight: 600;
    font-size: 1.3rem;
    color: rgba(168,96,168,1);
    padding: 1rem;

    & .add {
        padding: 0 10px;
    }

    @media screen and (max-width: 768px) {
        padding: .5rem;
        font-size: 1rem;
    }
`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;

    @media screen and (max-width: 1024px) {
        margin: 20px auto;
    }
`

export const CategoryContainer = styled.div`
${sharedContainerStyles}

@media screen and (max-width: 768px) {
    width: 90%;
    margin: 20px auto;
}
`

export const CategoryTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
    color: rgba(133,44,133,1);
`

export const RecipeCardContainer = styled.div`
    ${sharedCardContainerStyles}

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const AddRecipeLinkContainer = styled.div`
    ${sharedRecipeLinkContainerStyles}

    margin-top: 50px;
    margin-bottom: 50px;
`

export const AddRecipeLink = styled(Link)`
    ${sharedRecipeLinkStyles}
`

export const LoadMoreButtonContainer = styled.div`
    ${sharedButtonContainerStyles}
`