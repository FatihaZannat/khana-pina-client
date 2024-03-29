import { FaCalculator, FaCalendar, FaFileContract, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { IoMdMenu } from "react-icons/io";
import { LiaAddressCard } from "react-icons/lia";
import UseAdmin from "../hooks/UseAdmin";
import Usecart from "../hooks/Usecart";

const DashBoard = () => {
    const [isAdmin] = UseAdmin()
    const [cart] = Usecart()
    return (
        <div className="flex  mx-auto max-w-screen-xl">
            <div className="w-64 min-h-dvh bg-orange-500">
   
                  {
                    isAdmin ? <>
                       <ul className="menu   text-xl px-1">
                        <li className="my-2 "><NavLink to='/dashbord/adminHome'> <FaHome></FaHome>
                            Admin home</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/AddItem'> <FaUtensils></FaUtensils>
                            Add item</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/manageItems'> <IoMdMenu></IoMdMenu>
                            Manage Items</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/manageBookigs'> <FaShoppingCart></FaShoppingCart>
                            Manage Bookings</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/allUsers'> <FaUsers ></FaUsers>
                         All Users</NavLink></li>
                         </ul>
                    </>
                    :
                     <>
                      <ul className="menu   text-xl px-1">
                        <li className="my-2 "><NavLink to='/dashbord/userHome'> <FaHome></FaHome>
                            User home</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/reservation'> <FaCalendar
                        ></FaCalendar>
                            Reservation</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/paymentHistory'> <FaCalculator></FaCalculator>
                            Payment History</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/myCart'> <FaShoppingCart></FaShoppingCart>
                            My Cart({cart.length})</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/addReview'>
                        <VscPreview></VscPreview>   Add Review</NavLink></li>
                     
                        <li className="my-2 "><NavLink to='/dashbord/myBooking'> 
                         <LiaAddressCard></LiaAddressCard>  My Booking</NavLink></li>
                         </ul>
                    </> 
                  }

                           <hr />

                           <ul className="menu   text-xl px-1">
                     
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
            <div className="bg-slate-100 flex-1 px-12">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;