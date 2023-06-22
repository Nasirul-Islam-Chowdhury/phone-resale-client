import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';
import PhoneDetails from '../../Pages/PhoneDetails/PhoneDetails';
import Signin from '../../Pages/Signin/Signin';
import Signup from '../../Pages/Signup/Signup';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import Myorders from '../../Pages/Myorders/Myorders';
import Buyers from '../../Pages/Buyers/Buyers';
import Sellers from '../../Pages/Sellers/Sellers';
import AddProducts from '../../Pages/AddProducts/AddProducts';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import Blog from '../../Pages/Blog/Blog';
import MyBuyers from '../../Pages/MyBuyers/MyBuyers';
import Mobiles from '../../Pages/Mobiles/Mobiles';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Payment from '../../Pages/Payment/Payment';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/signin',
                element: <Signin/>
            },
            {
                path:'/mobiles',
                element: <Mobiles/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },
            {
                path:'/category/:categoryName',
                element: <PrivateRoute><CategoryDetails/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:7000/category/${params.categoryName}`)
            },
            {
                path:'/category/:categoryName/:id',
                element: <PhoneDetails/>,
                loader: ({params})=> fetch(`http://localhost:7000/phone/${params.id}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path:'/dashboard/orders',
                element: <Myorders/>
            },
            {
                path:'/dashboard/buyers',
                element: <Buyers/>
            },
            {
                path:'/dashboard/sellers',
                element: <Sellers/>
            },
            {
                path:'/dashboard/addproducts',
                element: <AddProducts/>
            },
            {
                path:'/dashboard/myProducts',
                element: <MyProducts/>
            },
            {
                path:'/dashboard/mybuyers',
                element: <MyBuyers/>
            },
            {
                path:'/dashboard/payment/:id',
                element: <Payment/>,
                loader: ({params})=>fetch(`http://localhost:7000/order/${params.id}`)
            }
        ]
    }
])

