import styled from "styled-components";
import { Link } from "react-router-dom";
import { sharedContainerStyles, sharedCardContainerStyles, sharedRecipeLinkContainerStyles } from "../../routes/category/category.styles";
import { sharedRecipeLinkStyles } from "../../routes/categories-preview/categories-preview.styles";

export const CategoryPreviewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
`

export const CategoryPreviewBasics = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px auto;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const CategoryPreviewName = styled.div`
    width: 100%;
`

export const CategoryPreviewTitle = styled(Link)`
    font-size: 2.5rem;
    font-weight: 600;
    color: rgba(133,44,133,1);
    margin-left: 50px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        margin-left: auto;
    }
`;

export const CategoryPreviewLinks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-right: 50px;

    @media screen and (max-width:768px) {
        margin-right: 0;
    }
`

export const CategoryPreviewLink = styled(Link)`
    font-size: 1rem;
    cursor: pointer;
    padding: 0 20px;

    & button {
        & .edit, .delete {
            padding: 10px 0;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 0 10px;
        margin: 10px auto;
        font-size: .8rem;
    }
`

export const PreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;

    @media screen and (max-width: 1024px) {
        margin: 20px auto;
    }
`

export const Preview = styled.div`
    ${sharedContainerStyles}

    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
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
`

export const AddRecipeLink = styled(Link)`
    ${sharedRecipeLinkStyles}
`