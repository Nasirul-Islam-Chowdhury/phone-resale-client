import React from "react";
import Banner from "../../Components/Banner/Banner";
import Categories from "../../Components/Categories/Categories";
import AdvertisedItems from "../../Components/AdvertisedItems/AdvertisedItems";
import ReviewSlider from "../../Components/ReviewSlider/ReviewSlider";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Accordian from "../../Components/Accordian/Accordian";
import Sponsors from "../../Components/sponsors/Sponsors";
import Prepareyourself from "../../Components/Prepareyourself/Prepareyourself";
import EasyPayment from "../../Components/EasyPayment/EasyPayment";

const Home = () => {
  return (
    <div>
      <Banner />
      <AdvertisedItems />
      <Categories />
      <ReviewSlider />
      <WhyUs />
      <Prepareyourself/>
      <Sponsors/>
      <Accordian />
      <EasyPayment/>
    </div>
  );
};

export default Home;
