import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUs";
import Permohonan from "../pages/Permohonan/Permohonan";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Contact />
      <Footer />
      <Permohonan />
    </>
  );
}

export default App;
