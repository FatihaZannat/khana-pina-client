
import { FaEdit, FaTrash } from "react-icons/fa";
import HeaderName from "../../Component/HeaderName";
import { MenuData } from "../../hooks/DataLoad";
import Swal from "sweetalert2";
import Axios from "../../hooks/Axios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const axios = Axios()
  const [refetch,menuData] = MenuData()

  // console.log(menuData);
  
  const handleDeleteUser = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async(result) => {
      if (result.isConfirmed) {
       const result = await axios.delete(`/menu/${item._id}`)
       
       if(result.data.deletedCount > 0){
        refetch()
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
       }
       
      }
    });

  }

  return (
    <div>
      <HeaderName header='manage all items' subHeader='hurry up !'></HeaderName>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th> </th>
              <th> Item Image </th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Actopm</th>
            </tr>
          </thead>
          {
            menuData.map((item, index) => <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div></div>

                </td>
                <td> {item.name}</td>
                <td>{item.price}</td>
                <td>
                 <Link to={`/dashbord/updateItem/${item._id}`}>
                 <button  className="bg-red-600 text-white p-1 text-xl">
                    <FaEdit></FaEdit>
                  </button>
                  </Link>
                </td>
                <th>
                  <button onClick={() => handleDeleteUser(item)} className="bg-red-600 text-white p-1 text-xl">
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>


            </tbody>)
          }

        </table>
      </div>
    </div>
  );
};

export default ManageItems;