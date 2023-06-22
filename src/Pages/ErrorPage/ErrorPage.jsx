import React, { useContext } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Auth } from '../../Contexts/AuthContext';

const ErrorPage = () => {
    const {user, logOut} = useContext(Auth)
    const handleSignout = ()=>{
      logOut()
      .then(()=>{})
      .catch((e)=>console.log(e))
    }
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return <div className='flex justify-center items-center min-h-screen text-black '>
            <div className='text-center'>
            <h1 className='text-4xl font-semibold ' >This page doesn't exist!</h1>
            <br />
            <p>You Need to Signout and login back</p>
    
            <div className='flex gap-4 my-4 justify-center'>
                <button onClick={handleSignout} className='btn btn-accent text-white'>Signout</button>
             
            </div>
            </div>
            </div>;
      }
  
      if (error.status === 401) {
        return <div className='flex justify-center items-center min-h-screen text-black '>
            <h1 className='text-4xl font-semibold'>You aren't authorized to see this</h1>
            
            <p>You Need to Signout and login back</p>
            <button>Signout</button>
            <div>
                <button className='btn btn-accent text-white'>Signout</button>
             
            </div>
            </div>;
      }
  
      if (error.status === 503) {
        return <div className='flex justify-center items-center min-h-screen text-black '>
            <h1 className='text-4xl font-semibold'>Looks like our API is down</h1>
            
            <p>You Need to Signout and login back</p>
            <button>Signout</button>
            <div>
                <button className='btn btn-accent text-white'>Signout</button>
             
            </div>
            </div>;
      }
  
      if (error.status === 418) {
        return <div className='flex justify-center items-center min-h-screen text-black '>
            <h1 className='text-4xl font-semibold'>🫖</h1>
            
            <p>You Need to Signout and login back</p>
            <button>Signout</button>
            <div>
                <button className='btn btn-accent text-white'>Signout</button>
             
            </div>
            </div>;
      }
    }
  
    return <div className='flex justify-center items-center min-h-screen text-black '>
        <h1 className='text-4xl font-semibold'>Something went wrong</h1>
        
        <p>You Need to Signout and login back</p>
        <button>Signout</button>
        <div>
            <button className='btn btn-accent text-white'>Signout</button>
         
        </div>
        </div>;
};

export default ErrorPage;