// components/Loader.js
import React, { useEffect, useRef } from 'react';
import logo from '../../assets/mn_logo.png';
import './loader.css';

const Loader = () => {
  const loaderRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const content = contentRef.current;

    const handleLoad = () => {
        setTimeout(() => {
          if (loader) {
            loader.style.animation = 'slideUp 1s forwards';
            setTimeout(() => {
              if (loader) loader.style.display = 'none';
              if (content) content.classList.remove('hidden-content-load');
              if (content) content.classList.add('visible-content-load');
            }, 1000); // Match this to the slideUp animation duration
          }
        }, 2000); // Match this to the growLogo animation duration
      };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <>
      <div className="loader" ref={loaderRef}>
        <img src= {logo} alt="Logo" className="logoload" />
      </div>
      
    </>
  );
};

export default Loader;
