
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import Axios from "../../../hooks/Axios";
import Usecart from "../../../hooks/Usecart";

const CartTable = ({ item, index }) => {
    const axios = Axios()
    const [, refetch] = Usecart()
    const { image, name, price, _id } = item
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/carts/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(e => console.log(e))

            }

        });
    }
    return (

        <tbody>

            <tr className='text-xl'>
                <th>{index + 1}</th>
                <td><img className='w-12' src={image} alt="" /></td>
                <td>{name}</td>
                <td>{price}</td>
                <td onClick={() => handleDelete(_id)} className='text-red-700'><MdDelete></MdDelete></td>
            </tr>
        </tbody>

    );
};

export default CartTable;