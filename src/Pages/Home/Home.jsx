import React from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import AdvertisedItems from "../../Components/AdvertisedItems/AdvertisedItems";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Accordian from "../../Components/Accordian/Accordian";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <AdvertisedItems />
      <ReviewSlider />
      <WhyUs />
      <Accordian />
    </div>
  );
};

export default Home;
