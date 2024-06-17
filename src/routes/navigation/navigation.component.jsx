import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { NavigationContainer, LogoContainer, NavigationWrapper, NavLinks, NavLink, AuthLinks } from '../navigation/navigation.styles';
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
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/recipes'>Recipes</NavLink>
                    </NavLinks>
                    <AuthLinks>
                        {
                            currentUser ? (
                                <NavLink to='/auth' onClick={signOutUser}>SIGN OUT</NavLink>
                            ) : (
                                <NavLink to='/auth'>SIGN IN</NavLink>
                            )
                        }
                    </AuthLinks>
                </NavigationWrapper>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;