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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/signin',
                element: <Signin/>
            },
            {
                path:'/signup',
                element: <Signup/>
            },
            {
                path:'/category/:categoryName',
                element: <CategoryDetails/>,
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
        element: <DashboardLayout/>,
        children:[
            {
                path:'/dashboard',
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
            }
        ]
    }
])

