import React, { useEffect, useRef } from 'react';
import logo from '../../assets/mn_logo.png';
import './loader.css';

// const Loader = () => {
//   const loaderRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const loader = loaderRef.current;
//     const content = contentRef.current;

//     const handleLoad = () => {
//       setTimeout(() => {
//         if (loader) {
//           loader.style.animation = 'slideUp 1s forwards';
//           setTimeout(() => {
//             if (loader) loader.style.display = 'none';
//             if (content) content.classList.remove('hidden-content-load');
//             if (content) content.classList.add('visible-content-load');
//           }, 1000); // Match this to the slideUp animation duration
//         }
//       }, 2000); // Match this to the growLogo animation duration
//     };

//     window.addEventListener('load', handleLoad); // Reverted back to 'load'
//     return () => window.removeEventListener('load', handleLoad);
//   }, []);

const Loader = () => {
    const loaderRef = useRef(null);
    const contentRef = useRef(null);
  
    useEffect(() => {
      const loader = loaderRef.current;
      const content = contentRef.current;
  
      // Set a timeout to hide the loader regardless of the load event
      const hideLoader = () => {
        if (loader) {
          loader.style.animation = 'slideUp 1s forwards';
          setTimeout(() => {
            if (loader) loader.style.display = 'none';
            if (content) content.classList.remove('hidden-content-load');
            if (content) content.classList.add('visible-content-load');
          }, 1000); // Match this to the slideUp animation duration
        }
      };
  
      // Set a timeout to hide the loader after 3 seconds
      const timer = setTimeout(hideLoader, 2000); // Adjust the duration as needed
  
      // Clear the timeout if the component unmounts
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      <div className="loader" ref={loaderRef}>
        <img src={logo} alt="Logo" className="logoload" />
      </div>
    </>
  );
};

export default Loader;
