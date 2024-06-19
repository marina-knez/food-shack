import styled from "styled-components";
import { sharedWrapperStyles, sharedTitleStyles } from "../home/home.styles";
import { sharedContainerStyles } from "../category/category.styles";

export const ShoppingListPageWrapper = styled.div`
    ${sharedWrapperStyles}
    padding-bottom: 100px;
`

export const ShoppingListWrapper = styled.div`
    ${sharedContainerStyles}
`

export const ShoppingPageTitle = styled.h2`
    ${sharedTitleStyles}
`

export const ShoppingListContainer = styled.ul`
    width: 100%;
    list-style: none;

    & h3 {
        color: rgba(133,44,133,1);
        font-size: 1.3rem;
    }
`

export const ShoppingListItem = styled.li`
    border-bottom: 1px solid lightgrey;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

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

export const EmptyShoppingList = styled.div`
    margin-left: 50px;

    & p {
        font-size: 1.1rem;
    }
`