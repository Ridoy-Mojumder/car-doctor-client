import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loadingState } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if (loadingState) {
        return <>
            <div className="flex justify-center items-center my-32">
                <img src="https://i.ibb.co/ZSppyKq/Rotating-globe.gif" alt="" />
            </div>
        </>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/signIn"></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;