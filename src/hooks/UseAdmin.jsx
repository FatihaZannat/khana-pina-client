import { useQuery } from "@tanstack/react-query";
import Axios from "./Axios";
import UseAuthContext from "./AuthLoad";

const UseAdmin = () => {
    const axios = Axios()
    const {user} = UseAuthContext()
    const { isPending, data : isAdmin} = useQuery({
        queryKey: ['admin'],
        queryFn: async () => {
            const result = await axios.get(`/users/admin/${user.email}`)
            console.log(result.data);
            return result.data.admin
        }
    })
    return (
        [isAdmin,isPending]
    );
};

export default UseAdmin;