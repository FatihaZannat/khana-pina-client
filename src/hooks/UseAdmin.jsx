import { useQuery } from "@tanstack/react-query";
import Axios from "./Axios";
import UseAuthContext from "./AuthLoad";

const UseAdmin = () => {
    const axios = Axios()
    const {user, loading} = UseAuthContext()
    const { isPending, data : isAdmin} = useQuery({
        queryKey: ['admin'],
        enabled: !loading,
        queryFn: async () => {
            // console.log('asking or checking admin', user);
            const result = await axios.get(`/users/admin/${user.email}`)
            // console.log(result.data);
            return result.data.admin
        }
    })
    return (
        [isAdmin,isPending]
    );
};

export default UseAdmin;