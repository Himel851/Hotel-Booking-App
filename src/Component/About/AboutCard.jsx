import React from "react";
import "./About.scss";
import aboutImg from "../../Images/about-img-1.jpg";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to grow your business
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ut
            sapiente, tempora sed modi reiciendis eius, repellendus debitis
            ullam dolore amet officia, quaerat quae excepturi.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque ut
            sapiente, tempora sed modi reiciendis eius, repellendus debitis
            ullam dolore amet officia, quaerat quae excepturi.
          </p>
          <button className="secondary-btn">
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutCard;
