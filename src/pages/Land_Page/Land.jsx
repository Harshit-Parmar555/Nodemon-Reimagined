import React from "react";

import Background from "./components/Background";
import Navbar from "../../custom/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ComparisonTable from "./components/Comparision";
import Review from "./components/Review";
import OpenSource from "./components/OpenSource";
import SponsorsMarquee from "./components/Sponser";
import Footer from "../../custom/Footer";

const Land = () => {
  return (
    <div className="w-full h-auto overflow-hidden relative">
      <Background />
      <Navbar />
      <Hero />
      <Intro />
      <ComparisonTable />
      <Review />
      <OpenSource />
      <SponsorsMarquee />
      <Footer />
    </div>
  );
};

export default Land;
