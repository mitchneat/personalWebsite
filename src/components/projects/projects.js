import React from 'react';
import './projects.css';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div className='image-page'>

            <Link to='/photoEveryday' className="image-link">
                <div class="rectangle">
                    <p>Photo Everyday</p>
                </div>  
            </Link>

            <Link to='/robocv' className="image-link">
                <div class="rectangle">
                    <p>Bird Tracker using Roboflow</p>
                </div>  
            </Link>

            <Link to='/comingSoon' className="image-link">
                <div class="rectangle">
                    <p>Reciept Scanner and Price Analysis</p>
                </div>  
            </Link>



        </div>
    );
    }

export default Projects;