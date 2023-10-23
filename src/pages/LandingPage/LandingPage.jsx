import { useState } from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
