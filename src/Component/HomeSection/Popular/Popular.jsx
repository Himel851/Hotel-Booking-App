import React from "react";
import PopCards from "./PopCards";
import './Popular.scss'

const Popular = () => {
  return (
    <>
      <section className="popular top">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Hotel</h1>
            <div className="line"></div>
          </div>

          <div className="content">
            <PopCards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Popular;
