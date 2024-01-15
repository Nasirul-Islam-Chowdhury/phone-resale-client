import React, { useContext } from 'react';
import { Auth } from '../../Contexts/AuthContext';
import Loading from '../../SharedComponents/Loading/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const locatioin = useLocation()
    const {user, loader} = useContext(Auth);
    if(loader){
        console.log("hi")
        return <Loading/>;
    }
    if(user){
        return children
    }
    return <Navigate to="/signin" state={{from:locatioin}} replace/>
};

export default PrivateRoute;