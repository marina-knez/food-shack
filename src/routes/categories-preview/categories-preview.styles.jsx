import styled from "styled-components";
import { Link } from "react-router-dom";
import { sharedRecipeLinkStyles } from "../category/category.styles";

export const AddCategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    border: 4px solid rgba(240, 201, 240, 1);
    border-radius: 1rem;
    margin: 50px 0 0 50px;
    scale: 1;
    transition: scale .5s;

    &:hover {
        scale: 1.1;
    }

    @media screen and (max-width: 768px) {
        width: 200px;
        margin-left: 20px;
        border-radius: .8rem;
    }
`

export const AddCategoryLink = styled(Link)`
    ${sharedRecipeLinkStyles}
`

export const SearchResultsContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`

export const SearchResultsTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    padding: 15px 20px 0 20px;
`

export const SearchResultsItem = styled(Link)`
    width: 95%;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid lightgrey;
    margin: 0 20px;

    & img {
        height: 100px;
        width: auto;
    }
`

export const SearchResultsItemDetails = styled.div`
    padding: 0 30px;

    & span {
        padding: 0 30px;
    }
`