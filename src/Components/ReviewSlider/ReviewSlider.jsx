import React from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from '../../assets/testimonial.png'
import { FaStar } from 'react-icons/fa';
const ReviewSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      const reviews = [
        {
            id: 1,
            title: "“The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.”",
            image: img,
            name: "Naisrul islam"
        },
        {
            id: 2,
            title: "“I got a pair of mobile from store and I’m very satisfied. They are high-quality and worth the money. The store also offered free shipping at that price so that’s a plus!”",
            image: img,
            name: "Nahid chy"
        },
        {
            id: 3,
            title: "“The tool X has really automated some of our company’s processes. We now spend less time doing manual work. It’s making [problem] very easy for us. Thanks to its scheduling feature, we don’t need staff to work outside of business hours.”",
            image: img,
            name: "safayat hussain"
        },
        {
            id: 4,
            title: "“This app allows me to do [problem] from my smartphone where I want and when I want to. The interface is easy to navigate and I find everything I need quickly. I can’t wait for [feature]!”",
            image: img,
            name: "itthad najat"
        },
        {
            id: 5,
            title: "I recently started using [AppName] and I couldn’t be more impressed with its functionality and user-friendly interface. The app has made a significant impact on my daily routine, streamlining tasks and providing valuable insights.",
            image: img,
            name: "Yunus ali"
        }
      ]
          return (
        <div className='container text-black my-32'>
            <h1 className='text-center text-4xl font-semibold font-primary my-20 p-3 rounded bg-slate-200'>Customer Speak</h1>
            <div >
        <Slider {...settings}>
         {
            reviews.map(review=> <div key={review.id}>
              <div  className='bg-green-50 rounded-md w-full h-96 flex flex-col  justify-center items-center lg:p-5 p-8'>
              <img className='w-16 mx-auto mb-5' src={review.image} alt="" />
                <p className='text-center font-primary lg:mx-0 mx-5'>{review.title}</p>
                <div className='flex justify-center items-center gap-1 mt-4 mb-2'>
                <FaStar className='w-5 h-5 text-orange-500'/>
                <FaStar className='w-5 h-5 text-orange-500'/>
                <FaStar className='w-5 h-5 text-orange-500'/>
                <FaStar className='w-5 h-5 text-orange-500'/>
                <FaStar className='w-5 h-5 text-orange-500'/>
                </div>
                <p className='text-xl font-semibold text-center font-primary'>{review.name}</p>
              </div>
            </div>
            )
         }
        </Slider>
      </div>
        </div>
    );
};

export default ReviewSlider;