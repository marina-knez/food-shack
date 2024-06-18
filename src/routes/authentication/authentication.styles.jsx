import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-around;
    margin: 30px auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 0 auto 100px auto;
    }
`