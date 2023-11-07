import { useContext } from "react";
import { AuthContext } from "../contextProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loader) {
        return <div className=" text-center my-auto">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRoute;