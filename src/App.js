import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Photos from "./components/photos/photos";
import Resume from "./components/resume/resume";
import Greece from "./components/greece/greece";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import './App.css'; // Import your CSS file if you have one for additional styling
// import React, { useState, useEffect } from 'react';
import PhotoEveryday from "./components/photoEveryday/photoEveryday";
import Projects from "./components/projects/projects";
import ComingSoon from "./components/comingSoon/comingSoon";

function App() {
  // const [hasOverflow, setHasOverflow] = useState(false);

  // useEffect(() => {
  //   const content = document.querySelector('.content');
  //   if (content.scrollHeight > window.innerHeight) {
  //     setHasOverflow(true);
  //   } else {
  //     setHasOverflow(false);
  //   }
  // }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <div className={`content ${hasOverflow ? 'has-overflow' : ''}`}> */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/greece" element={<Greece />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photoEveryday" element={<PhotoEveryday />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
          </Routes>
        </div>
        <div className="bottom-footer">
          <Footer />
        </div>
        {/* {hasOverflow && <Footer />} */}
      {/* </div> */}
      {/* {!hasOverflow && <Footer />} */}
    </div>
  );
}

export default App;
