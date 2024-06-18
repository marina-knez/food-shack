import styled, { css } from "styled-components";
import { sharedContainerStyles } from "../../routes/category/category.styles";

export const sharedWrapperStyles = css`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;

    @media screen and (max-width: 1024px) {
        margin: 20px auto;
    }
`

export const sharedTitleStyles = css`
    font-size: 2.5rem;
    font-weight: 600;
    color: rgba(133,44,133,1);
    margin-left: 30px;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
        margin-left: 30px;
    }
`

export const HomePageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;

    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
`

export const RecentlyViewedWrapper = styled.div`
    ${sharedWrapperStyles}
`

export const RecentlyViewedContainer = styled.div`
    ${sharedContainerStyles}

    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 20px auto;
    }
`

export const RecentlyViewedTitle = styled.div`
    ${sharedTitleStyles}
`

export const RecentlyAddedWrapper = styled.div`
    ${sharedWrapperStyles}
`

export const RecentlyAddedContainer = styled.div`
    ${sharedContainerStyles}
`

export const RecentlyAddedTitle = styled.div`
    ${sharedTitleStyles}
`

export const RandomRecipeWrapper = styled.dialog`
    width: 50%;
    margin: 0 auto;
    text-align: right;
    position: absolute;
    z-index: 1;
    animation: ${props => props.open ? 'appear .8s' : 'vanish .5s'}; 
    border: 2px solid rgba(133,44,133,1);
    border-radius: 1rem;

    & .open {
        display: block;
        animation: appear 1s;

        &::backdrop {
            display: none;
        }
    }

    & .close {
        margin-right: 0;
        cursor: pointer;
        color: rgba(133,44,133,1);
    }

    & div {
        margin: 0 auto;
        &:hover {
            scale: 1;
        }

        &:nth-child(3) {
            padding-top: 10px;
            padding-bottom: 20px;
        }
    }

    @keyframes appear {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes vanish {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

`

export const RandomRecipeButtonContainer = styled.div`
    margin-left: 50px;
    margin-bottom: 50px;

    & button {
        & .random {
            padding: 10px 0;
        }
    }
`