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
import PrivateRoute from "../Router/PrivateRoute"
import AllUsers from "../Pages/DashBoardPages/AllUsers";
import ManageItems from "../Pages/DashBoardPages/ManageItems";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AddItem from "../Pages/DashBoardPages/AddItem";
import UpdateItem from "../Pages/DashBoardPages/UpdateItem";
import Payment from "../Pages/DashBoardPages/Payment/Payment";
import PaymentHIstory from "../Pages/DashBoardPages/Payment/PaymentHIstory";
import AdminHome from "../Pages/DashBoardPages/AdminHome";
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
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        // user dashboard
       
        {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
        {
          path: 'myCart',
          element: <ShopingCart></ShopingCart>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHIstory></PaymentHIstory>
        },

        // Admin dashboard
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'allUsers',
          element: <AdminPrivateRoute><AllUsers></AllUsers></AdminPrivateRoute>
        },
        {
          path: 'manageItems',
          element: <AdminPrivateRoute><ManageItems></ManageItems></AdminPrivateRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminPrivateRoute><UpdateItem></UpdateItem></AdminPrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'addItem',
          element: <AdminPrivateRoute><AddItem></AddItem></AdminPrivateRoute>
        }
    ]
    }
  ]);