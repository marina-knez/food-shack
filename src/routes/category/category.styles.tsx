import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { sharedButtonContainerStyles } from '../../components/add-category/add-category.styles';
import { sharedWrapperStyles, sharedRecipeLinkStyles } from "../categories-preview/categories-preview.styles"; 

export const sharedContainerStyles = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 50px;
    align-items: center;
    justify-items: center;
    margin: 20px auto;
    width: 100%;

    @media screen and (max-width: 1600px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        width: 95%;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        margin: 20px auto;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 90%;
    }
`

export const sharedCardContainerStyles = css`
    width: 100%;
`

export const sharedRecipeLinkContainerStyles = css`
    display: flex;
    justify-content: center;
    align-items: center;
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

    @media screen and (max-width: 480px) {
        margin: 15px auto;
        height: 50px;
        width: 200px;
    }
`

export const BaseWrapper = styled.div`
    ${sharedWrapperStyles}
`

export const CategoryPagePreviewLinks = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 70px;

    @media screen and (max-width:768px) {
        margin-right: 0;
    }

    @media screen and (max-width: 480px) {
        display: flex;
    }
`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;

    @media screen and (max-width: 1024px) {
        margin: 20px auto 100px auto;
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
    width: 80%;

    @media screen and (max-width: 768px) {
        text-align: center;
        margin: 50px auto 0 auto;
    }
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