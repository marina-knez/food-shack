import styled from "styled-components";
import { Link } from "react-router-dom";

export const AddCategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 200px;
    border: 4px solid rgba(240, 201, 240, 1);
    border-radius: 1rem;
    margin: 50px 0 0 50px;
`

export const AddCategoryLink = styled(Link)`
    font-weight: 600;
    color: rgba(168,96,168,1);
    padding: 1rem;
`