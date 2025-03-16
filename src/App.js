import './App.css';
// import React, { useState, useEffect } from 'react';


import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Photos from "./components/photos/photos";
// import Resume from "./components/resume/resume";
import Greece from "./components/greece/greece";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import PhotoEveryday from "./components/photoEveryday/photoEveryday";
import Projects from "./components/projects/projects";
import ComingSoon from "./components/comingSoon/comingSoon";
import Robocv from "./components/robocv/robocv";
import Loader from "./components/loader/loader";
import HikeData from "./components/hikeData/hikeData";
import Kmeans from "./components/kmeans/kmeans";
import Indo from "./components/indo/indo"; 
import Guatemala from "./components/guatemala/guatemala"; 
import Electric from "./components/electricForecast/electricForecast"
function App() {

  return (
    <div className="App">
      <Loader />
      <div className="content2">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="/greece" element={<Greece />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/photoEveryday" element={<PhotoEveryday />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route path="/projects/robocv" element={<Robocv />} />
            <Route path="/projects/hike" element={<HikeData />} />
            <Route path="/projects/parallel" element={<Kmeans />} />
            <Route path="/travel/Indonesia" element={<Indo />} />
            <Route path="/travel/Guatemala" element={<Guatemala />} />
            <Route path="/projects/electric-forecast" element={<Electric />} />
          </Routes>
        </div>
        <Footer className='footer'/>
      </div>
    </div>
  );
}

export default App;
