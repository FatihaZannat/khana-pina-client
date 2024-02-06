import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
    const location = useLocation()
    //  console.log(location.pathname === '/login');
    return (
        <div className="max-w-screen-xl mx-auto">
            {location.pathname === '/login' ||  <Navbar></Navbar> }
           
            <Outlet></Outlet>

            {location.pathname === '/login' || <Footer></Footer>}

        </div>
    );
};

export default Main;