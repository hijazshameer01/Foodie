import React from 'react'
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return ( 
  <div className="about-section-container" id="about">
    <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
    </div>
    <div className="about-section-image-container"data-aos="zoom-in" data-aos-duration="1400">
        <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="about-section-text-container">
        <p className="primary-subheading"data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200">About</p>
        <h1 className="primary-heading"data-aos="zoom-in-left" data-aos-duration="1400" data-aos-delay="300">
            Food Is An Important Part of A Balanced Diet
        </h1>
        <p className="primary-text"data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200">
            A balanced diet supplies the nutrients your body needs to work effectively. Without balanced nutrition,
            your body is more prone to disease, infection, fatigue, and low performance 
        </p>
        <p className="primary-text" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="200">
            Children who don't get enough healthy foods may face growth and developmental problems, poor academic 
            performance, and frequent infections.
        </p>
        <div className="about-buttons-container">
            <button className="secondary-button"data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">Learn More</button>
            <button className="watch-video-button"data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">
                {""}
                <BsFillPlayCircleFill/>Watch Video</button>

        </div>

    </div>

  </div>
  )
}

export default About