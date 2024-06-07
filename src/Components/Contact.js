import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
        <h1 className="primary-heading" data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">Have Question In Mind? </h1>
        <h1 className="primary-heading" data-aos="zoom-in-right" data-aos-duration="1400" data-aos-delay="300">Let Us Help You</h1>
        <div className="contact-form-container">
            <input type="text" placeholder="yourmail@gmail.com" />
            <button className="secondary-button"data-aos="flip-down" data-aos-duration="1400" data-aos-delay="300">Submit</button>

        </div>

    </div>
  )
}

export default Contact