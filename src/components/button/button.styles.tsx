import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 100px;
  width: auto;
  height: 40px;
  letter-spacing: 0.5px;
  line-height: 40px;
  padding: 0 35px;
  font-size: 1rem;
  background-color: #ffffff;
  color: rgba(168,96,168,1);
  text-transform: uppercase;
  font-family: 'Kalam';
  font-weight: bolder;
  border: 1px solid rgba(168,96,168,1);
  border-radius: .5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all .3s linear;

  &:hover {
      background-color: rgba(168,96,168,1);
      color: #ffffff;
      border: 1px solid grey;
  }
`

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  border: 1px solid #4285f4;
  color: white;
  
    &:hover {
      background-color: white;
      border: 1px solid #4285f4;
      color: #4285f4;
    }
`

export const InvertedButton = styled(BaseButton)`
  background-color: rgba(168,96,168,1);
  color: white;
  border: 1px solid rgba(168,96,168,1);
  
    &:hover {
      background-color: white;
      color: rgba(168,96,168,1);
      border: 1px solid rgba(168,96,168,1);
    }
`

export const BaseButtonScroll = styled.button`
  position: fixed;
  right: 20px;
  bottom: 55px;
  margin-top: -5rem;
  padding: 1rem;
  border: none;
  border-radius: 100%;
  background-color: rgba(168,96,168,1);
  cursor: pointer;

  @media screen and (max-width: 480px) {
        padding: .8rem;
    }

  .arrow-up {
    font-size: 1.5rem;
    padding: 5px 10px;
    color: white;

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
        padding: 1px 5px;
    }
}
`

export const InvertedButtonBack = styled(InvertedButton)`
  min-width: 50px;
  width: auto;
  padding: 0 10px;
  display: block;
  height: 35px;

  & .icon-back {
    padding: 8px 10px;
    cursor: pointer;
  }
`