import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1024px) {
        justify-content: center;
    }
`

export const NavigationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    @media screen and (max-width: 1024px) {
        position: fixed;
        bottom: 0;
        z-index: 1;
        padding: 25px 50px;
        justify-content: center;
        width: 100%;
        height: 50px;
        background-color: rgba(240,201,240,1);
    }

`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 250px;
    padding: 15px 0 0 50px;

    & svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`

export const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

    @media screen and (max-width: 1024px) {
        width: 100%;
        justify-content: space-between;
    }
`

export const NavLink = styled(Link)`
    padding: 25px 50px 10px 50px;
    cursor: pointer;

    & .icon {
        display: none;
    }
    
    @media screen and (max-width: 1024px) {
        padding: 10px 50px;

        & .icon {
            display: block;
            padding: 10px 0;
            color: rgba(133,44,133,1);
            transition: color .5s;
        }
    }

    &:hover,
    &:focus {
        & span {
            color: rgba(133,44,133,1);
            font-size: 1.5rem;
        }

        & .icon {
            color: white;
        }
    }

    &:active {

        & span {
            color: rgba(133,44,133,1);
            font-size: 1.5rem;
        }

        & .icon {
            color: white;
        }
    }
`

export const NavItem = styled.span`
    font-size: 1.4rem;
    color: black;
    transition: all .5s;
    position: relative;
    display: block;

    &:hover {
        color: rgba(133,44,133,1);
        font-size: 1.5rem;

        &::after {
            content: "";
            width: 50%;
            height: 2px;
            background: rgba(133,44,133,1);
            position: absolute;
            bottom: 5px;
            left: 0;

            @media screen and (max-width: 1024px) {
                width: 50%;
                left: 5px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 5px;
        font-size: 1rem;
        display: none;
    }
`