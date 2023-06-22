import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [ admin, setAdmin] = useState(false);
    const [isAdminloading, setisAdminLoding] = useState(true)
    useEffect(()=>{
        if(email){
        fetch(`http://localhost:7000/admin/${email}`,{
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.isAdmin)
            setisAdminLoding(false)
            console.log(data)})
    }
    },[email])
    return [admin,isAdminloading]
};

export default useAdmin;