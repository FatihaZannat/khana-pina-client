import { FaCalculator, FaCalendar, FaFileContract, FaHome, FaShoppingBag, FaShoppingCart, FaTextHeight } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { LiaAddressCard } from "react-icons/lia";

const DashBoard = () => {
    return (
        <div className="flex  mx-auto">
            <div className="w-64 min-h-dvh bg-orange-500">
   
                    <ul className="menu   text-xl px-1">
                        <li className="my-2 "><NavLink to='/dashbord/userHome'> <FaHome></FaHome>
                            User home</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/reservation'> <FaCalendar
                        ></FaCalendar>
                            Reservation</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/paymentHistory'> <FaCalculator></FaCalculator>
                            Payment History</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/myCart'> <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/addReview'>
                        <VscPreview></VscPreview>   Add Review</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/myBooking'> 
                         <LiaAddressCard></LiaAddressCard>  My Booking</NavLink></li>
                           <hr />
                     
                        <li className="my-2 "><NavLink to='/'> <FaHome></FaHome>
                          Home</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/menu'> <IoMenu></IoMenu>
                           Menu</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/shop/salad'> <FaShoppingBag></FaShoppingBag>
                           Shop</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/contact'> <FaFileContract></FaFileContract>
              Contact  </NavLink></li>      
                     
                        </ul>
                

            </div>
            <div className="bg-slate-100 flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;