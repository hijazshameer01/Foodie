import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image:PickMeals,
            title:"Pick Meals",
            text:"Pickup enjoy our tasty organic food!",
        },
        {
            image:ChooseMeals,
            title:"Choose How Often",
            text:"Sign in & choose from our weekly menu",
        },
        {
            image:DeliveryMeals,
            title:"Fast Deliveries",
            text:"We promise to deliver within 30 mintues",
        },
    ];
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading"data-aos="fade-down" data-aos-duration="1400" data-aos-delay="300">Work</p>
            <h1 className="primary-heading"data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">How It Works</h1>
            <p className="primary-text"data-aos="fade-left" data-aos-duration="1400" data-aos-delay="300">
            A customer choosing the restaurant of their choice, scannig the menu items, choosing an item, and finally choosing for pick-up or delivery.</p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }

        </div>

    </div>
  )
};

export default Work