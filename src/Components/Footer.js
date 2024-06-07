import React from 'react';
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-wrapper" id="footer">
        <div className="footer-section-one">
            <div className="footer-logo-container" data-aos="fade-right" data-aos-duration="1400" data-aos-delay="300">
                <img src={Logo} alt="" />
            </div>
            <div className="footer-icons"data-aos="flip-down" data-aos-duration="1400" data-aos-delay="300">
                <BsTwitter/>
                <SiLinkedin/>
                <BsYoutube/>
                <FaFacebookF/>
            </div>
        </div>
        <div className="footer-section-two" data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">
            <div className="footer-section-colums">
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>244-5333-7783</span>
                <span>hello@food.com</span>
                <span>press@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>

            </div>

        </div>

    </div>
  )
}

export default Footer