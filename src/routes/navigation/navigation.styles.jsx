import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:768px) {
        //width: 70%;
    }
`

export const NavigationWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 25px 50px;
        z-index: 1;
        position: absolute;
        justify-content: space-between;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: salmon;

        &.active {
            right: 0;
        }

        &.navbar {
            right: -100%;
        }
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
`

export const NavLink = styled(Link)`
    padding: 25px 50px 10px 50px;
    cursor: pointer;
    font-size: 1.4rem;
    color: black;
    transition: all .5s;
    position: relative;

    &:hover {
        color: rgba(133,44,133,1);
        font-size: 1.5rem;

        &::after {
            content: "";
            width: 30%;
            height: 2px;
            background: rgba(133,44,133,1);
            position: absolute;
            bottom: 10px;
            left: 25px;

            @media screen and (max-width: 1024px) {
                width: 50%;
                left: 5px;
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 5px;
        font-size: 1rem;
    }
`

export const AuthLinks = styled.div`
`