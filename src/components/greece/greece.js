import React from 'react';
// import React, { useState, useEffect } from 'react';
import './greece.css'; // Import CSS file for styling
import greece2 from '../../assets/Greece/greece2_resize3_2.jpg';
import im1 from '../../assets/Greece/im1.jpg';
import im3 from '../../assets/Greece/im3.jpg';
import im5 from '../../assets/Greece/im5.jpg';
import im6 from '../../assets/Greece/im6.jpg';
import im7 from '../../assets/Greece/im7.jpg';
import im8 from '../../assets/Greece/im8.jpg';
import im9 from '../../assets/Greece/im9.jpg';
import im10 from '../../assets/Greece/im10.jpg';
import im11 from '../../assets/Greece/im11.jpg';
import im12 from '../../assets/Greece/im12.jpg';
import im13 from '../../assets/Greece/im13.jpg';
import im14 from '../../assets/Greece/im14.jpg';
import im15 from '../../assets/Greece/im15.jpg';
import im16 from '../../assets/Greece/im16.jpg';
import im17 from '../../assets/Greece/im17.jpg';
import im18 from '../../assets/Greece/im18.jpg';
import im20 from '../../assets/Greece/im20.jpg';
import im21 from '../../assets/Greece/im21.jpg';
import im22 from '../../assets/Greece/im22.jpg';
import im23 from '../../assets/Greece/im23.jpg';
import im24 from '../../assets/Greece/im24.jpg';
import im28 from '../../assets/Greece/im28.jpg';
import im29 from '../../assets/Greece/im29.jpg';
import im30 from '../../assets/Greece/im30.jpg';
import im31 from '../../assets/Greece/im31.jpg';
import im32 from '../../assets/Greece/im32.jpg';
import im34 from '../../assets/Greece/im34.jpg';
import im38 from '../../assets/Greece/im38.jpg';
import im40 from '../../assets/Greece/im40.jpg';
import im41 from '../../assets/Greece/im41.jpg';
import im42 from '../../assets/Greece/im42.jpg';
import im43 from '../../assets/Greece/im43.jpg';
import im44 from '../../assets/Greece/im44.jpg';
import im45 from '../../assets/Greece/im45.jpg';
import im46 from '../../assets/Greece/im46.jpg';
import im48 from '../../assets/Greece/im48.jpg';
import im49 from '../../assets/Greece/im49.jpg';
import im50 from '../../assets/Greece/im50.jpg';
import im51 from '../../assets/Greece/im51.jpg';
import im52 from '../../assets/Greece/im52.jpg';

const Greece = () => {

    return (
        // !!!!!!!!!!!!!!!!!!!!! All pics 2 by 3 aspect ratio!!!!!!!!!!!!!!!!!!!!!!
        <div className="image-gallery">
            <div className="image-row">
                <img src={im20} alt='im' className="imageP"/>
                <img src={im15} alt='im' className="imageP"/>
                <img src={im13} alt='im'  className="imageL"/>
                <img src={im45} alt='im'  className="imageP"/>
            </div>
            <div className="image-row">
                <img src={greece2} alt='im' className="imageL"/>
                <img src={im23} alt='im' className="imageP"/>    
                <img src={im52} alt='im' className="imageL"/>
            </div> 
            <div className="image-row">
                <img src={im48} alt='im' className="imageP"/>
                <img src={im28} alt='im' className="imageL"/>
                <img src={im18} alt='im' className="imageP"/>
                <img src={im46} alt='im' className="imageP"/>
            </div>
            <div className="image-row">
                <img src={im42} alt='im' className="imageL"/>
                <img src={im10} alt='im' className="imageP"/>    
                <img src={im17} alt='im' className="imageL"/> 
            </div>  
            <div className="image-row">
                <img src={im16} alt='im' className="imageP"/>
                <img src={im6} alt='im' className="imageP"/>
                <img src={im24} alt='im' className="imageL"/>
                <img src={im9} alt='im' className="imageP"/>
            </div>
            <div className="image-row">
                <img src={im3} alt='im' className="imageL"/>
                <img src={im21} alt='im' className="imageP"/>    
                <img src={im5} alt='im' className="imageL"/>
            </div>
            <div className="image-row">
                <img src={im31} alt='im' className="imageP"/>
                <img src={im41} alt='im' className="imageL"/>
                <img src={im14} alt='im' className="imageP"/>
                <img src={im40} alt='im' className="imageP"/>
            </div>
            <div className="image-row">
                <img src={im11} alt='im' className="imageP"/>    
                <img src={im22} alt='im' className="imageL"/> 
                <img src={im38} alt='im' className="imageL"/>
            </div>
            <div className="image-row">
                <img src={im1} alt='im' className="imageL"/>
                <img src={im34} alt='im' className="imageL"/>
                <img src={im7} alt='im' className="imageP"/>   
            </div>
            <div className="image-row">
                <img src={im43} alt='im' className="imageP"/>
                <img src={im32} alt='im' className="imageL"/>
                <img src={im50} alt='im' className="imageP"/>
                <img src={im44} alt='im' className="imageP"/>
            </div>
            <div className="image-row">
                <img src={im29} alt='im' className="imageL"/>
                <img src={im51} alt='im' className="imageP"/>
                <img src={im30} alt='im' className="imageL"/> 

            </div>
            <div className="image-row">
                <img src={im12} alt='im' className="imageL"/>
                <img src={im8} alt='im' className="imageL"/> 
                <img src={im49} alt='im' className="imageP"/>
            </div>
        </div>
    );
};

export default Greece;
