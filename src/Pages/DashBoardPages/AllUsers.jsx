import { useQuery } from "@tanstack/react-query";
import HeaderName from "../../Component/HeaderName";
import Axios from "../../hooks/Axios";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axios = Axios()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axios.get('/users')
            return data.data
        }
    })

    const handleAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to change rolle",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
              axios.patch(`/users/${id}`)
              .then(res => {
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your roll is modified.",
                        showConfirmButton: false,
                        timer: 1000
                      });
                      refetch()
                }
              })
            }
          });
    }

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: `want to delete`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/users/${id}`)
                    .then( res =>{
                        console.log(res);
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            refetch()
                        }
                    }
                      
                )
                .catch(err => console.log(err))

    }
});
    }
return (
    <div>
        <HeaderName subHeader='wellcome' header='all users'></HeaderName>

        <div className="overflow-x-auto mx-6">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pole</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    users.map((user, index) => <tbody key={user._id}>
                        {/* row 1 */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                               {
                                user.role === 'Admin' ?  'Admin' :
                                <button onClick={()=>handleAdmin(user._id)} className="bg-orange-400 text-white p-1 text-2xl">
                                <FaUsers></FaUsers>
                            </button>
                               }
                            </td>
                            <td>
                                <button onClick={() => handleDeleteUser(user._id)} className="bg-red-600 text-white p-1 text-xl">
                                    <FaTrash></FaTrash>
                                </button>
                            </td>
                        </tr>

                    </tbody>)
                }

            </table>
        </div>
    </div>
);
};

export default AllUsers;