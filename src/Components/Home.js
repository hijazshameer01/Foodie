import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png"
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner-Background-image" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading' data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text' data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">
              Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
            </p>
            <button className='secondary-button'data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">
              Order Now <FiArrowRight />

            </button>

          </div>
          <div className='home-image-container' data-aos="zoom-in" data-aos-duration="1400">
            <img src={BannerImage} alt="" />

          </div>
        </div>
        
    </div>
  );
};

export default Home