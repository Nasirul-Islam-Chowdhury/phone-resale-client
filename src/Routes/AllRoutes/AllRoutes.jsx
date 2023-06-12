import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout/MainLayout';
import Home from '../../Pages/Home/Home';
import CategoryDetails from '../../Pages/CategoryDetails/CategoryDetails';

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
                path:'/category/:categoryName',
                element: <CategoryDetails/>,
                loader: ({params})=> fetch(`http://localhost:7000/category/${params.categoryName}`)
            }
        ]
    }
])

