import React from 'react';
import Slider from 'react-slick';

const Sponsors = () => {
    const sponsors = [
     {img: "https://www.designyourway.net/blog/wp-content/uploads/2019/10/s1-55.jpg"},
     {img: "https://i0.wp.com/www.mobilecellphonerepairing.com/wp-content/uploads/2022/05/Huawei-Logo.jpg"},
     {img: "https://img.freepik.com/premium-vector/smartphone-logo-communication-electronics-vector-modern-phone-design-company-brand-symbol_638875-2058.jpg"},
     {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-j5UDQeX4txzPj63Ty_eWT48w_g04LvQf31I7zlmpUHtMnlbn6B189LAGQt1PelPro4A&usqp=CAU"},
     {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClXUKChAjAmrmCDshIzL951FJrhVGOKT3sRK5_yQ9EGBD6o5n2z0wnAnLForIka0Gl3k&usqp=CAU"},
     {img:"https://logos-world.net/wp-content/uploads/2021/03/Sony-Ericsson-Logo-700x394.png"},
     {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPBem6_-ZCYI7aeXd39_kxldbhex3y3G7aIm6tfuqjBx-z-HmOxwSDNOBHgE-0jZl510&usqp=CAU"},
     {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_C1_k_tKlpFGcXR0aDZdJucpb5t38cEjnREEkWSIW1DqOpgrha_Yki1kmWUytoMS0Mw&usqp=CAU"}
    ]
    var settings = {

        infinite: false,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 500,
        infinite: true,
        slidesToShow: 4,
      
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
        
              infinite: true,
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
    
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
          
            }
          }
        ]
      };
    return (
        <div className='container'>
              <Slider {...settings}>
         {
            sponsors.map((sponsor, id)=> 
            <div key={id} className=''>
            <div className='lg:mx-5 rounded-md   lg:py-0 py-10'>
                <div  className=' w-80 h-50  flex flex-col justify-center items-center lg:p-5 '>
              <img className='w-full mx-auto h-40 border p-3  object-cover' src={sponsor.img} alt="" />
            
              </div>
            </div>
            </div>
            )
         }
        </Slider>
        </div>
    );
};

export default Sponsors;