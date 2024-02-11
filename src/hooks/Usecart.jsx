import { useQuery } from "@tanstack/react-query";
import Axios from "./Axios";
import UseAuthContext from "./AuthLoad";

const Usecart = () => {
    const axios = Axios()
    const {user} = UseAuthContext()

    const {isLoading, data : cart = [] ,refetch} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
           const data = await axios.get(`/carts?email=${user?.email}`)
           return data.data
            
        }
    })
    const { data : menu = [] } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
           const data = await axios.get(`/menu`)
           return data.data
            
        }
    })

    return [cart, refetch,isLoading, menu]
 
};

export default Usecart;