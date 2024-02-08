import { Navigate, useLocation } from "react-router-dom";
import UseAuthContext from "../hooks/AuthLoad";

const PrivateRoute = ({children}) => {
    const {user, loading}  = UseAuthContext()
    const location = useLocation()
    // console.log(location);

    if(loading){
        return <h1>loading......</h1>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={location.pathname}/>
};

export default PrivateRoute;