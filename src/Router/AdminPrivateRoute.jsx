import { Navigate } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const AdminPrivateRoute = ({children}) => {
    
    const [isAdmin, isPending] = UseAdmin()
    if(isPending){
        return <h1>loading......</h1>
    }
    if(!isAdmin){
    return <Navigate to='/'></Navigate>
    }
    return children
};

export default AdminPrivateRoute;