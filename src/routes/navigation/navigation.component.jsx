import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavigationWrapper, NavLinks, NavLink, NavItem } from '../navigation/navigation.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faArrowRightToBracket, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as RecipesLogo } from '../../assets/recipes-logo.svg';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);


    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <RecipesLogo className="logo" />
                </LogoContainer>
                <NavigationWrapper>
                    <NavLinks>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faHouse} className="icon home" />
                            <NavItem>Home</NavItem>
                        </NavLink>
                        <NavLink to='/recipes'>
                            <FontAwesomeIcon icon={faBook} className="icon book" />
                            <NavItem>Recipes</NavItem>
                        </NavLink>
                        {
                            currentUser ? (
                                <NavLink to='/auth' onClick={signOutUser}>
                                    <FontAwesomeIcon icon={faPowerOff} className="icon sign-out" />
                                    <NavItem>SIGN OUT</NavItem>
                                </NavLink>
                            ) : (
                                <NavLink to='/auth'>
                                    <FontAwesomeIcon icon={faArrowRightToBracket} className="icon sign-in" />
                                    <NavItem>SIGN IN</NavItem>
                                </NavLink>
                            )
                        }
                    </NavLinks>
                </NavigationWrapper>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;