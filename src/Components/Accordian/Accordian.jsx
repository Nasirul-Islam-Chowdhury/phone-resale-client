import React from 'react';

const Accordian = () => {
    return (
        <div className='container text-black font-primary font-semibold'>
            <div className="collapse collapse-plus bg-slate-100 mb-4">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What mobile brands do you sell?
  </div>
  <div className="collapse-content"> 
    <p>We offer a wide range of mobile brands, including popular options such as Apple, Samsung, Xiaomi, Google, and OnePlus.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-slate-100 mb-4">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What types of mobile accessories do you have?
  </div>
  <div className="collapse-content"> 
    <p>We have a diverse selection of mobile accessories, including phone cases, screen protectors, chargers, headphones, and Bluetooth speakers.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-4 bg-slate-100">
  <input type="radio" name="my-accordion-4" /> 
  <div className="collapse-title text-xl font-medium">
  Do you have a trade-in program for old mobile devices?
  </div>
  <div className="collapse-content"> 
    <p>Yes, we have a convenient trade-in program where you can exchange your old mobile device for cash or store credit. Contact us for more information on how to participate.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-4 bg-slate-100">
  <input type="radio" name="my-accordion-4" /> 
  <div className="collapse-title text-xl font-medium">
  Are the devices you sell refurbished or new?
  </div>
  <div className="collapse-content"> 
    <p>We offer both refurbished and new mobile devices, providing you with flexibility and cost-saving options. Each product description will specify whether it is refurbished or new.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-4 bg-slate-100">
  <input type="radio" name="my-accordion-4" /> 
  <div className="collapse-title text-xl font-medium">
  What condition are the refurbished devices in?
  </div>
  <div className="collapse-content"> 
    <p>Our refurbished devices undergo a rigorous inspection and refurbishment process to ensure they are in excellent working condition. They may have minor cosmetic imperfections but are fully functional and come with a warranty.</p>
  </div>
</div>
<div className="collapse collapse-plus mb-4 bg-slate-100">
  <input type="radio" name="my-accordion-4" /> 
  <div className="collapse-title text-xl font-medium">
  Can I sell my old mobile device to your shop?
  </div>
  <div className="collapse-content"> 
    <p>Yes, we also buy used mobile devices. Bring your device to our shop, and our team will assess its condition and provide you with an offer.</p>
  </div>
</div>
        </div>
    );
};

export default Accordian;