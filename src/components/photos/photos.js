import React from 'react';
import './photos.css';
import greece1 from '../../assets/greece1.JPG';
import greece2 from '../../assets/greece2.JPG';
// import greece3 from '../../assets/greece3.JPG';
import greece4 from '../../assets/greece4.JPG';
// import greece5 from '../../assets/greece5.JPG';
import indo1 from '../../assets/indo1.JPG';
import indo2 from '../../assets/indo2.JPG';
import indo3 from '../../assets/indo3.JPG';
// import indo4 from '../../assets/indo4.JPG';
// import indo5 from '../../assets/indo5.JPG';
import maine1 from '../../assets/maine1.JPG';
import maine2 from '../../assets/maine2.JPG';
import maine3 from '../../assets/maine3.JPG';
import { Link } from 'react-router-dom';



const Photos = () => {
    return (
        <div className='image-page'>
            <link rel="preload" href="../../assets/indo1.JPG" as="image"></link>
            <link rel="preload" href="../../assets/indo2.JPG" as="image"></link>
            <link rel="preload" href="../../assets/indo3.JPG" as="image"></link>

            <Link to='/greece' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={greece4} alt="Greece 4" className="image"/>
                    <img src={greece2} alt="Greece 2" className="image"/>
                    <div class="overlay-text">Greece</div>
                    <img src={greece1} alt="Greece 1" className="image"/>
                </div>
                
            </Link>

            <Link to='/greece' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={indo1} alt="Indo 1" className="image"/>
                    <img src={indo2} alt="Indo 2" className="image"/>
                    <div class="overlay-text">Indonesia</div>
                    <img src={indo3} alt="Indo 3" className="image"/>
                </div>
                
            </Link>

            <Link to='/greece' className="image-link">
                
                <div className='image-wrapper'>
                    <img src={maine2} alt="maine2" className="image"/>
                    <img src={maine1} alt="Maine 1" className="image"/>
                    <div class="overlay-text">Maine</div>
                    <img src={maine3} alt="Maine 3" className="image"/>
                </div>
                
            </Link>


        </div>
    );
}

export default Photos;