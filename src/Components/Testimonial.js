import React from 'react';
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai"
const Testimonial = () => {
  return (
    <div className="work-section-wrapper" id="testimonials">
        <div className="work-section-top">
            <p className="primary-subheading"data-aos="fade-down" data-aos-duration="1400" data-aos-delay="300">Testimonial</p>
            <h1 className="primary-heading"data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">
                What They Are Saying
            </h1>
            <p className="primary-text"data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">
             I love working with Foodie. Tom Cruise is super responsive. the food is delicious and fully customized. I have referred many friends to Tom Cruise who all love the service.
            </p>
        </div>
        <div className="testimonial-section-bottom"data-aos="flip-down" data-aos-duration="1400" data-aos-delay="300">
            <img src={ProfilePic} alt="" />
            <p data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">
            John Doe is a natural foods chef and holistic nutritionist. growing up in rural northern california in a family of farmers, 
            John Doe has always felt a deep connection to where food comes from, and this connection grew naturally into a passion for cooking.
            </p>
            <div className="testimonials-stars-container" data-aos="flip-down" data-aos-duration="1400" data-aos-delay="300">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>

        </div>

    </div>
  )
}

export default Testimonial