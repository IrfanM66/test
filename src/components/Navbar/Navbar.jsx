import React from "react";
import "./Navbar.css";
import image from "../../assets/images/blood.png";

const Navbar = () => {
  return (
    <nav>
      <img className="blood_image" src={image}></img>
      <h2 className="nav_logo">Teman Donor</h2>
      <div className="navigation_bar">
        <a href="" class="nav_link">
          Home
        </a>
        <a href="" className="nav_link">
          About Us
        </a>
        <a href="" className="nav_link">
          Contact Us
        </a>
        <a href="" className="nav_link">
          Stock
        </a>
        <a href="" className="nav_link">
          Permohonan
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
