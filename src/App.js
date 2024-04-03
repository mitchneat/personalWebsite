import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Photos from "./components/photos/photos";
import Resume from "./components/resume/resume";
import Greece from "./components/greece/greece";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/photos" element={<Photos/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/greece" element={<Greece/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
      </div>  
      <Footer/>
    </div>
    
  );
}

export default App;
