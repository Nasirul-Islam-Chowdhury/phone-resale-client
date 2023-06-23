import React, { useEffect, useState } from 'react';

const useSeller = (email) => {
    const [ seller, setSeller] = useState(false);
    const [issellerloading, setissellerLoding] = useState(true)
    useEffect(()=>{
        if(email){
        fetch(`https://phone-resale-server-nine.vercel.app/seller/${email}`,{
            headers:{
                autherization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setSeller(data.isSeller)
            setissellerLoding(false)
            console.log(data)})
    }
    },[email])
    return [seller,issellerloading]
};


export default useSeller;