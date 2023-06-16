import React, { useContext } from 'react';
import { Auth } from '../../Contexts/AuthContext';
import Loading from '../../SharedComponents/Loading/Loading';

const PrivateRoute = () => {
    const {user, loader} = useContext(Auth);
    if(loader){
        return <Loading/>;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;