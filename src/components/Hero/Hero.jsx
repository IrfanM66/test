import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/Research.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero_container">
        <div className="hero_info">
          <h1 className="hero_info_title">Teman Donor</h1>
          <h3 className="hero_info_subtitle">
            Teman donor merupakan website untuk donor darah yang memudahkan
            penduduk sekitar untuk mengetahui stok darah yang tersedia
          </h3>
          <div className="hero_button_container">
            <a href="">
              <button className="hero_cta">Mulai Donor</button>
            </a>
          </div>
        </div>
        <img className="hero_img" src={heroImage} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
