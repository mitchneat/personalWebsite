import React from 'react';
import './indo.css';
import fullVid from '../../assets/Indo/GH013626.mov';



const Indo = () => {
    return (
        <div className='videoPage'>
              <video className='videoPlayerPE' controls muted>
                  <source src={fullVid} type="video/mp4"/>
                  This video does not contain audio tracks.
              </video>
              <p>
                Currently updating...
              </p>
        
              
            </div>
    );
    }

export default Indo;