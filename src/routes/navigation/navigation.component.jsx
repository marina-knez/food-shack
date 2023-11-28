import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div>
                <Link to='/'>HOME</Link>
                <br />
                <Link to='/auth'>SIGN IN</Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;