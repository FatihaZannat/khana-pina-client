import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SingUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import UserHome from "../Pages/DashBoardPages/UserHome";
import ShopingCart from "../Pages/DashBoardPages/ShopingCart/ShopingCart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: 'menu',
            element: <Menu></Menu>
        },
        // {
        //   path: 'shop',
        //   element: <OurShop></OurShop>
        // },
        {
          path: 'shop/:name',
          element: <OurShop></OurShop>
        },{
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        }
       
      ]
    },
    {
      path: "/dashbord",
      element: <DashBoard></DashBoard>,
      children:[
        {
        path: '/dashbord/userHome',
        element: <UserHome></UserHome>
      },
        {
          path: '/dashbord/myCart',
          element: <ShopingCart></ShopingCart>
        }
    ]
    }
  ]);