import { Link } from "react-router-dom";
import styled from "styled-components";

export const RecipeCardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border: 4px solid rgba(240,201,240,1);
    border-radius: .5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 5px;
      border-top-left-radius: .4rem;
      border-top-right-radius: .4rem;
    }
`

export const RecipeCardLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 25px;
    margin-bottom: 25px;
`

export const RecipeCardLink = styled(Link)`
    min-width: 100px;
    width: auto;
    height: 35px;
    letter-spacing: 0.5px;
    line-height: 35px;
    padding: 0 35px;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Kalam';
    font-weight: bolder;
    transition: all .3s linear;
`

export const RecipeCardInfo = styled.div`
    width: 100%;
    padding-left: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 1rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.4rem;
    }
`

export const RecipeCardTitle = styled.span`
    display: block;
    width: 90%;
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: rgba(168,96,168,1);
    font-weight: 600;
`