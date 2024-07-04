import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavigationWrapper, NavLinks, NavLink, NavItem, CurrentUserWrapper } from '../navigation/navigation.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faArrowRightToBracket, faPowerOff, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as RecipesLogo } from '../../assets/recipes-logo.svg';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <RecipesLogo className="logo" />
                </LogoContainer>
                <NavigationWrapper>
                    <NavLinks>
                        <NavLink to='/' className="nav-link active">
                            <FontAwesomeIcon icon={faHouse} className="icon home" />
                            <NavItem>Home</NavItem>
                        </NavLink>
                        <NavLink to='/recipes' className="nav-link">
                            <FontAwesomeIcon icon={faBook} className="icon book" />
                            <NavItem>Recipes</NavItem>
                        </NavLink>
                        <NavLink to='/shopping-list' className="nav-link">
                            <FontAwesomeIcon icon={faCartShopping} className="icon my-list" />
                            <NavItem>Shopping</NavItem>
                        </NavLink>
                        {
                            currentUser ? (
                                <CurrentUserWrapper>
                                    <h3 className={currentUser ? 'user-active' : 'user-inactive'}>{currentUser.displayName}</h3>
                                    <NavLink to='/auth' onClick={signOutUser}>
                                        <FontAwesomeIcon icon={faPowerOff} className="icon sign-out" />
                                    </NavLink>
                                </CurrentUserWrapper>
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