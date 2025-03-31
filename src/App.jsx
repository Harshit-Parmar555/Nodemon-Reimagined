import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";

// pages import
import Land from "./pages/Land_Page/Land";

const App = () => {
  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth and fluid scrolling
    const lenis = new Lenis({
      duration: 1.2, // Short duration for responsiveness
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth transitions
      smooth: true, // Ensures constant smooth scrolling
      smoothTouch: false, // Enables smooth scrolling on touch devices
    });
    // Animation loop to keep Lenis active
    const animate = (time) => {
      lenis.raf(time); // Pass the time to Lenis
      requestAnimationFrame(animate); // Recursive call for continuous updates
    };
    requestAnimationFrame(animate);
    // Clean up Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Land />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
