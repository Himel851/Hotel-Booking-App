import React from "react";
import DestiHome from "../HomeSection/Desti/DestiHome";
import Hero from "../HomeSection/Hero";
import HomeAbout from "../HomeSection/HomeAbout";
import Popular from "../HomeSection/Popular/Popular";
import Download from "../HomeSection/Download/Download";
import Works from "../HomeSection/Works/Works";
import Gallery from "../HomeSection/Gallery/Gallery";
import Header from "./Header";
import './Header.scss'
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HomeAbout />
      <Popular />
      <DestiHome />
      <Download />
      <Works />
      <Gallery />
    </>
  );
};

export default Home;
