import { useQuery } from "@tanstack/react-query";
import UseAuthContext from "../../../hooks/AuthLoad";
import Axios from "../../../hooks/Axios";

const PaymentHIstory = () => {
    const {user} = UseAuthContext()
    const axios = Axios()

    const {data: payments = []} = useQuery({
        queryKey: ['payment', user.email],
        queryFn: async() => {
         const res =await axios.get(`/payments/${user.email}`)
         return res.data
        //  console.log(res.data.length);
        }
    })
    return (
        <div>
            <h1>Payment History {payments.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>price</th>
        <th>TrangectionId</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,index )=><tr key={payment._id} className="bg-base-200">
        <th>{index + 1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr> )}
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHIstory;