import React, { useContext, useState } from "react";
import { Auth } from "../../Contexts/AuthContext";
import { toast } from "react-hot-toast";
import {AiOutlineClose} from 'react-icons/ai'

const OrderModal = ({ data,setOpenModal }) => {
  const { user} = useContext(Auth);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const itemName = data.name;
    const itemPrice = data.price;
    const email = user?.email;
    const name = user?.displayName;
    const number = form.number.value;
    const sellerName = data.sellerName;
    const sellerEmail = data.sellerEmail;
   
    if(!(user?.email)){
      return toast.error("Please signin/signup first to continue")
    }

    if(!number.length){
      toast.error("Number Not Found. you have to give your number and order again")
      return
     }
    const bookingItems = { itemName, itemPrice, email, name, number,sellerEmail, sellerName };
    fetch('https://phone-resale-server-nine.vercel.app/orders',{
      method: "POST",
      headers:{
        "content-type":"application/json",
          autherization: `bearer ${localStorage.getItem("accessToken")}`
       
      },
      body: JSON.stringify(bookingItems)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      toast.success(`${itemName} Ordered successfully`)
    })

  };
  return (
  <>
    {
       <div>
       <input type="checkbox" id="my-modal-6" className="modal-toggle" />
       <div className="modal modal-bottom sm:modal-middle">
         <div className="modal-box bg-white">
           <form
             onSubmit={handleOrder}
             className="grid grid-cols-1 gap-3 mt-10 bg-white"
           >
            <div className="flex justify-end">
            </div>
            <div className="flex justify-end">
              <button className="text-xl text-end" onClick={()=>setOpenModal(false)}>
              <AiOutlineClose className="w-6 h-6"/>
              </button>
            </div>
             <div>
               <p className="text-sm p-1">Product Name</p>
               <input
                 readOnly
                 placeholder="product name"
                 type="text"
                 name="price"
                 defaultValue={data.name}
                 className="input input-bordered w-full text-black"
               />
             </div>
             <div>
               <p className="text-sm p-1">Price</p>
               <input
                 readOnly
                 placeholder="product name"
                 type="text"
                 defaultValue={`$${data.price}`}
                 className="input input-bordered w-full text-black"
               />
             </div>
             <div>
               <p className="text-sm p-1">email</p>
               <input
                 readOnly
                 name="email"
                 defaultValue={user?.email}
                 type="email"
                 placeholder="email"
                 className="input input-bordered w-full "
               />
             </div>
 
             <div>
               <p className="text-sm p-1">Name</p>
               <input
                 name="name"
                 readOnly
                 defaultValue={user?.displayName}
                 type="text"
                 placeholder="Your name"
                 className="input input-bordered w-full "
               />
             </div>
 
            
            {
              data.location &&
              <div>
              <p className="text-sm p-1">location</p>
              <input
              required
              readOnly
              defaultValue={data.location}
                name="location"
                type="text"
                placeholder="Your location"
                className="input input-bordered w-full "
              />
            </div>
            }
             <div>
               <p className="text-sm p-1">Number</p>
               <input
        
                 name="number"
                 type="number"
                 placeholder="Phone number"
                 className="input input-bordered w-full "
               />
             </div>
             <div className="modal-action" href="#">
               <div className="modal-action">
                 <button type="submit">
                 <label className="btn"  htmlFor="my-modal-6">
                 Submit
                 </label>
                 </button>
               </div>
             </div>
           </form>
         </div>
       </div>
     </div>
    }
  </>
  );
};

export default OrderModal;
