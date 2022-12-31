import React from "react";
import MyCarousel from "../../components/carousel/Carousel";
import Header from "../../components/header/Header";
import Disaster from "../../components/disaster/Disaster";
import OtherServices from "../../components/otherServices/OtherServices";
import References from "../../components/references/References";
import Services from "../../components/services/Services";
import Youtube from "../../components/youtube/Youtube";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <MyCarousel />
      <Services />
      <Disaster />
      <References />
      <Youtube />
      <OtherServices />
      <Footer />
    </>
  );
};

export default Home;
