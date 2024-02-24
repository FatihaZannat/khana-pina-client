import { Link, NavLink } from "react-router-dom";
import UseAuthContext from "../../hooks/AuthLoad";
import {  FaShoppingCart } from "react-icons/fa";
import Usecart from "../../hooks/Usecart";
import UseAdmin from "../../hooks/UseAdmin";
// import { MenuData } from "../../hooks/DataLoad";

const Navbar = () => {
    
    // const [offered, salad, pizza, soups, desserts, drinks, ] = MenuData()
    const [cart] = Usecart()
    const [isAdmin] = UseAdmin()
    // console.log(cart);
    const { user, logOut } = UseAuthContext()
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(e => console.log(e))
    }
    const navItem = < >
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        <li><NavLink to={`/shop/salad`}>Our Shop</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
      
       <li>
       {
            user ? isAdmin ? <NavLink to='/dashbord/adminHome'>Dashbord</NavLink> : <NavLink to='/dashbord/userHome'>Dashbord</NavLink> : ''
         }
       </li>
        

        {user ? <>

            <Link to='/dashBord/myCart'>
            <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
             </Link>
            

            <li><Link onClick={handleLogOut} to=''>Logout</Link></li>
        </> :
            <li><NavLink to='/login'>Login</NavLink></li>}

    </>
    return (
        <div className="navbar bg-black text-white   max-w-screen-xl mx-auto fixed z-10 opacity-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Khana Pina</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;