import React from 'react';
import './photos.css';
import greece1 from '../../assets/Greece/greece1_resize.jpg';
import greece2 from '../../assets/Greece/greece2_resize.jpg';
import greece4 from '../../assets/Greece/greece4_resize.jpg';
import indo1 from '../../assets/Indo/indo1_resize.jpg';
import indo2 from '../../assets/Indo/indo2_resize.jpg';
import indo3 from '../../assets/Indo/indo3_resize.jpg';
import maine1 from '../../assets/New England/maine1_resize.jpg';
import maine2 from '../../assets/New England/pic2_resize.jpg';
import maine3 from '../../assets/New England/maine2_resize.jpg';
import slc1 from '../../assets/SLC/mtns2_resize.jpg';
import slc2 from '../../assets/SLC/skiing1_resize.jpg';
import slc3 from '../../assets/SLC/bison_resize.jpg';
import thai1 from '../../assets/Thailand/lake4_resize.jpg';
import thai2 from '../../assets/Thailand/scuba1.jpg';
import thai3 from '../../assets/Thailand/temple4_resize.jpg';
import guat1 from '../../assets/Guatemala/lakeAtitlan_16by9.jpg';
// import guat2 from '../../assets/Guatemala/volcano_exp_16by9.jpeg';
import guat3 from '../../assets/Guatemala/volcano_sunrise_16by9.jpg';
import guat4 from '../../assets/Guatemala/antigua_16by9.jpg';


import { Link } from 'react-router-dom';
// import React, { useState, useEffect} from 'react';
// import { Blurhash } from 'react-blurhash';

// ------------------------------------  all photos 16:9 --------------------
const Photos = () => {
    // const [imageLoaded, setImageLoaded] = useState(false)

    // useEffect(() => {
    //     const img = new Image()
    //     img.onload = () => {
    //         setImageLoaded(true)
    //     }
    //     img.src = src
    // }, [src])

    return (
        <div className='image-page-photo'>

            <Link to='/travel/Guatemala' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={guat4} alt="Guat 1" className="image"/>
                    <img src={guat3} alt="Guat 2" className="image"/>                    
                    <div class="overlay-text">Guatemala</div>
                    <img src={guat1} alt="Guat 3" className="image"/>
                </div>
                
            </Link>
            <Link to='/greece' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={greece2} alt="Greece 4" className="image"/>
                    <img src={greece1} alt="Greece 2" className="image"/>                    
                    <div class="overlay-text">Greece</div>
                    <img src={greece4} alt="Greece 1" className="image"/>
                </div>
                
            </Link>

            <Link to='/travel/Indonesia' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={indo2} alt="Indo 1" className="image"/>
                    <img src={indo1} alt="Indo 2" className="image"/>
                    <div class="overlay-text">Indonesia</div>
                    <img src={indo3} alt="Indo 3" className="image"/>
                </div>
                
            </Link>

            <Link to='/comingSoon' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={slc2} alt="slc1" className="image"/>
                    <img src={slc3} alt="slc2" className="image"/>
                    <div class="overlay-text">Salt Lake City</div>
                    <img src={slc1} alt="slc3" className="image"/>
                </div>
                
            </Link>

            <Link to='/comingSoon' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={thai1} alt="thai1" className="image"/>
                    <img src={thai2} alt="thai2" className="image"/>
                    <div class="overlay-text">Thailand</div>
                    <img src={thai3} alt="thai3" className="image"/>
                </div>
                
            </Link>

            <Link to='/comingSoon' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={maine2} alt="maine2" className="image"/>
                    <img src={maine3} alt="Maine 1" className="image"/>
                    <div class="overlay-text">New England</div>
                    <img src={maine1} alt="Maine 3" className="image"/>
                </div>
                
            </Link>


        </div>
    );
}

export default Photos;