import { useState } from "react";
import "./Permohonan.css";
import Navbar from "../../components/Permohonan-donor/Navbar/Navbar";
import Hero from "../../components/Permohonan-donor/Hero/Hero";
import Formulir from "../../components/Permohonan-donor/Formulir/Formulir";
import Footer from "../../components/Permohonan-donor/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Formulir />
      <Footer />
    </>
  );
}

export default App;
