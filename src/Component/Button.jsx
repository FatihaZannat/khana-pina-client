import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "../hooks/Axios";
import Usecart from "../hooks/Usecart";
import UseAuthContext from "../hooks/AuthLoad";

const Button = ({ text, item }) => { 
    
    const[, refecth] = Usecart()

    console.log(item);
    const { image, name, price, _id } = item
    const axios = Axios()

    const { user } = UseAuthContext()
    const location = useLocation()
    const navigate = useNavigate()

    const handleAddToCart = () => {
        // console.log(item);
        if (!user) {
            Swal.fire({
                title: "Are you not logged in",
                text: "You won't be login here",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                }
            });
        }
        const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        }
if(! item == '')
        axios.post('carts', cartItem)
            .then(res => {
               
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refecth()
            })
            .catch(e => console.log(e))

    }
    return (
        <div className="text-center">
            <button onClick={() => handleAddToCart(item)} className=" btn-outline btn border-x-0 border-t-0 border-b-4 uppercase  border-black mb-9">{text}</button>
        </div>
    );
};

export default Button;