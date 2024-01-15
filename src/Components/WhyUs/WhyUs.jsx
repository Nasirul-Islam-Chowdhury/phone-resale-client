import React from 'react';
import returning from '../../assets/return.png'
import delivery from '../../assets/delivery.png'
import cash from '../../assets/cashless.png'
const WhyUs = () => {
    const WhyUs = [
        {
            id: 1,
            title: "Fastest Delivery",
            description:"Our delivery system is to fast. We commit delivery in three working days.",
            image: delivery
        },
        {
            id: 2,
            title: "Online Payment",
            description:"You can pay use stripe online payment system.",
            image: cash
        },
        {
            id: 3,
            title: "Easy Return",
            description:"Easy return with 100% refund. Please visit refund policy.",
            image: returning
        }
    ]
    return (
        <div className='container text-black my-32'>
           <h1 className='text-4xl text-center font-bold font-primary'>Why You Should Buy From Us</h1>
          <div  className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10'>
            {
                WhyUs.map(why=> <div key={why.id} className='border p-10 hover:bg-slate-100'>
                    <img className='w-24 p-5 bg-slate-100 rounded-full mx-auto shadow-xl' src={why.image} alt="" />
                    <h1 className='text-center font-bold text-2xl font-primary my-4'>{why.title}</h1>
                    <p className='text-center font-primary my-4'>{why.description}</p>
                </div>)
            }
          </div>
           
        </div>
    );
};

export default WhyUs;