import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { sharedButtonContainerStyles } from "../../components/add-category/add-category.styles";

export const sharedWrapperStyles = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
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

    @media screen and (max-width: 480px) {
        margin: 20px 0 0 20px;        
    }
`

export const AddCategoryLink = styled(Link)`
    ${sharedRecipeLinkStyles}
`

export const Wrapper = styled.div`
    ${sharedWrapperStyles}
    position: relative;
`

export const BackButtonContainer = styled.div`
    ${sharedButtonContainerStyles}
    margin-top: 0;
`

export const SearchResultsContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    position: absolute;
    z-index: 1;
    background-color: rgba(240,201,240,1);
    left: 25vw;
    top: 9vh;
    padding-bottom: 30px;

    @media screen and (max-width: 1024px) {
        width: 70%;
        top: 11vh;
        left: 22vw;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        top: 16vh;
        left: 10vw;
    }

    @media screen and (max-width: 480px) {
        top: 13vh;
    }
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
    border-bottom: 2px solid grey;
    margin: 0 auto;
    align-items: center;

    & img {
        height: 100px;
        width: auto;

        @media screen and (max-width: 480px) {
            height: 70px;
        }
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const SearchResultsItemDetails = styled.div`
    padding: 0 0 0 30px;
    width: 100%;

    & h3 {
        @media screen and (max-width: 768px) {
            margin: 0;
        }

        @media screen and (max-width: 480px) {
            font-size: 1rem;
        }
    }

    & div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }

        & span {

            @media screen and (max-width: 1024px) {
                padding: 0 10px;
            }

            @media screen and (max-width: 480px) {
                font-size: .8rem;
            }
        }
    }
`