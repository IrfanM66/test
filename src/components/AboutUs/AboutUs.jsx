import React from "react";
import "./AboutUs.css";
import image from "../../assets/images/donor-darah.jpg";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about_container">
        <h2>About Us</h2>
        <img src={image} alt="" />
        <p className="deskription-aboutUs">
          Teman Donor adalah ide website yang berawal dari unit donor darah yang
          berada di setiap daerah yang terkadang sulit atau malas untuk menunggu
          antrian. Maka dari itu, kami membuat website Teman Donor untuk
          memudahkan masyarakat dalam mendaftar donor darah ataupun menerima
          donor.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
