import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At MediLink 24/7, we are dedicated to providing exceptional healthcare services with compassion and expertise. Established in 2024, our state-of-the-art facility combines advanced medical technology with a patient-centered approach. Our team of highly skilled doctors, nurses, and staff work tirelessly to ensure the well-being of every patient. Whether it’s routine care, specialized treatments, or emergency services, we are here to support you and your loved ones on the journey to better health.
          </p>
        
          <p>
          MediLink 24/7 is a trusted leader in healthcare, blending advanced medical innovation with personalized care. Since 2024, our dedicated team has been committed to improving lives through expert treatment, compassion, and a patient-first approach. Experience excellence, where your health is our mission
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
