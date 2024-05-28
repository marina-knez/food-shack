import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);


    return (
        <Fragment>
            <div>
                <Link to='/'>HOME</Link>
                <br />
                {
                    currentUser ? (
                        <span onClick={signOutUser}>SIGN OUT</span>
                    ) : (
                        <Link to='/auth'>SIGN IN</Link>
                    )
                }
                <br />
                <Link to='/recipes'>Recipes</Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;