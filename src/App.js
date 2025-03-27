import './App.css';
import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar/navbar";
import Loader from "./components/loader/loader";
import Footer from "./components/footer/footer";
import Landing from "./components/landing/landing";

const About = lazy(() => import("./components/about/about"));
const Photos = lazy(() => import("./components/photos/photos"));
// const Resume = lazy(() => import("./components/resume/resume"));
const Greece = lazy(() => import("./components/greece/greece"));
const Contact = lazy(() => import("./components/contact/contact"));
const PhotoEveryday = lazy(() => import("./components/photoEveryday/photoEveryday"));
const Projects = lazy(() => import("./components/projects/projects"));
const ComingSoon = lazy(() => import("./components/comingSoon/comingSoon"));
const Robocv = lazy(() => import("./components/robocv/robocv"));
const HikeData = lazy(() => import("./components/hikeData/hikeData"));
const Kmeans = lazy(() => import("./components/kmeans/kmeans"));
const Indo = lazy(() => import("./components/indo/indo"));
const Guatemala = lazy(() => import("./components/guatemala/guatemala"));
const Electric = lazy(() => import("./components/electricForecast/electricForecast"));
const Puzzle = lazy(() => import("./components/puzzle/puzzle"));

function App() {

  return (
    <div className="App">
      <Loader />
      <div className="content2">
        <Navbar />
        <div className="container">
          <Routes>
            {/* Landing is always rendered and never lazy-loaded */}
            <Route path="/" element={<Landing />} />
              
              {/* Other routes are lazy-loaded with Suspense */}
              <Route path="/photos" element={<Suspense fallback={<Landing />}><Photos /></Suspense>} />
              <Route path="/projects" element={<Suspense fallback={<Landing />}><Projects /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<Landing />}><About /></Suspense>} />
              <Route path="/greece" element={<Suspense fallback={<Landing />}><Greece /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<Landing />}><Contact /></Suspense>} />
              <Route path="/projects/photoEveryday" element={<Suspense fallback={<Landing />}><PhotoEveryday /></Suspense>} />
              <Route path="/comingSoon" element={<Suspense fallback={<Landing />}><ComingSoon /></Suspense>} />
              <Route path="/projects/robocv" element={<Suspense fallback={<Landing />}><Robocv /></Suspense>} />
              <Route path="/projects/hike" element={<Suspense fallback={<Landing />}><HikeData /></Suspense>} />
              <Route path="/projects/parallel" element={<Suspense fallback={<Landing />}><Kmeans /></Suspense>} />
              <Route path="/travel/Indonesia" element={<Suspense fallback={<Landing />}><Indo /></Suspense>} />
              <Route path="/travel/Guatemala" element={<Suspense fallback={<Landing />}><Guatemala /></Suspense>} />
              <Route path="/projects/electric-forecast" element={<Suspense fallback={<Landing />}><Electric /></Suspense>} />
              <Route path="/projects/puzzle" element={<Suspense fallback={<Landing />}><Puzzle /></Suspense>} />
          </Routes>
        </div>
        <Footer className='footer'/>
      </div>
    </div>
  );
}

export default App;
