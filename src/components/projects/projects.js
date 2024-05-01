import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/photoStart.JPG';
import pic3 from '../../assets/photoend1.JPG';
import pic2 from '../../assets/photoend3.JPG';
import pic4 from '../../assets/roboflowCover.png';

const Projects = () => {
    return (
        <div className='image-page'>

            <Link to='/photoEveryday' className="image-link">
                <div class="rectangle image-container">
                        <img src={pic1} alt="pic1" className="logoimage"/>
                        <img src={pic3} alt="pic1" className="logoimage"/>
                        <img src={pic2} alt="pic2" className="logoimage"/>
                    <p class='projoverlayText'>Photo Everyday</p>
                </div>  
            </Link>

            <Link to='/robocv' className="image-link">
                <div class="rectangle image-container">
                    <img src={pic4} alt="pic1" className="logoimage1"/>
                    <p class='projoverlayText'>Roboflow CV Bird Identifier</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div class="rectangle text-container">
                    <p className='projectLabel'>Travel Tracker Dashboard</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div class="rectangle text-container">
                    <p className='projectLabel'>Reciept Scanner and Price Analysis</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div class="rectangle text-container">
                    <p className='projectLabel'>Capstone CV for black hornet drone</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div class="rectangle text-container">
                    <p className='projectLabel'>NHL Analytics</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div class="rectangle text-container">
                    <p className='projectLabel'>Practice with parallel coding</p>
                </div>  
            </Link>


        </div>
    );
    }

export default Projects;