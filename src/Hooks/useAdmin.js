import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [ admin, setAdmin] = useState(false);
    const [isAdminloading, setisAdminLoding] = useState(true)
    useEffect(()=>{
        if(email){
        fetch(`https://phone-resale-server.onrender.com/admin/${email}`,{
            headers:{
                autherization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.isAdmin)
            setisAdminLoding(false)
        })
    }
    },[email])
    return [admin,isAdminloading]
};

export default useAdmin;