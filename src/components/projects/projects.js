import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/photoStart_resize.jpg';
import pic3 from '../../assets/photoend1_resize.jpg';
import pic2 from '../../assets/photoend3_resize.jpg';
import pic4 from '../../assets/roboflowCover.png';
import AT from '../../assets/ATIcon.jpg';
import parallel from '../../assets/parallel/computeCover.jpg';



const Projects = () => {
    return (
        <div className='image-page'>
            {/*!!!!!!!!!!!!!!!!!all pictures have to be 16:9 asspect ratio!!!!!!!!!!!! */}

            <Link to='/projects/electric-forecast' className="image-link">
                <div className="rectangle image-container">
                    <img src={AT} alt='picat' className='logoimage1'/>
                    <p className='projoverlayText'>Electric Usage Forecast</p>
                </div>  
            </Link>

            <Link to='/projects/hike' className="image-link">
                <div className="rectangle image-container">
                    <img src={AT} alt='picat' className='logoimage1'/>
                    <p className='projoverlayText'>AT Tableau Dashboard</p>
                </div>  
            </Link>

            <Link to='/projects/photoEveryday' className="image-link">
                <div className="rectangle image-container">
                        <img src={pic1} alt="pic1" className="logoimage"/>
                        <img src={pic3} alt="pic1" className="logoimage"/>
                        <img src={pic2} alt="pic2" className="logoimage"/>
                    <p className='projoverlayText'>Photo Everyday</p>
                </div>  
            </Link>

            <Link to='/projects/robocv' className="image-link">
                <div className="rectangle image-container">
                    <img src={pic4} alt="pic1" className="logoimage1"/>
                    <p className='projoverlayText'>Roboflow CV Bird Identifier</p>
                </div>  
            </Link>

            <Link to='/projects/parallel' className="image-link">
            <div className="rectangle image-container">
                    <img src={parallel} alt='picat' className='logoimage1'/>
                    <p className='projoverlayText'>Parallel Coding</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div className="rectangle text-container">
                    <p className='projectLabel'>Travel Tracker Dashboard</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div className="rectangle text-container">
                    <p className='projectLabel'>Reciept Scanner and Price Analysis</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div className="rectangle text-container">
                    <p className='projectLabel'>Capstone CV for black hornet drone</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
            <div className="rectangle text-container">
                    <p className='projectLabel'>NHL Analytics</p>
                </div>  
            </Link>

            


        </div>
    );
    }

export default Projects;