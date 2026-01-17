import React from 'react';
import './photoEveryday.css';
import thumbnail from '../../assets/photoEveryday_thumbnail.jpg';

const videoUrl = "https://mitch-neat-website-data.s3.us-east-2.amazonaws.com/PhotoEveryday/composite.mp4";

const PhotoED = () => {
  return (

    <div className='videoPage'>
      <div className="video-container-pe">
        <video className='videoPlayerPE' controls muted poster={thumbnail}>
          <source src={videoUrl} type="video/mp4"/>
          This video does not contain audio tracks.
        </video>
      </div>

      <div className="bottom-section-pe">
                <h2>Details</h2>
      </div>
      <div className="paragraphsPart"> 
      
        <p> In June 2021, I embarked on a personal project inspired by videos I had seen of individuals like Hugo Cornellier and Christoph Rehage. 
          Each day, I took a photo of myself, intending to document my growth and evolution over the span of my lifetime. For nearly two years, 
          I let the collection of photos accumulate, envisioning the project as a long-term endeavor spanning decades rather than mere months. 
          I developed a python script that reads in all of the images, aligns them, and splices them together in a video. I want to note that while I may appear somber, it was an unintentional 
          side effect as I aimed to maintain a consistent facial expression every day. It is hard to look back even just as few years to see how different 
          I looked but I am hopeful it will be a worthwhile project when I am 75 years old. In the recent years I have been better at remembering to take pictures with friends or when I am out doing 
          cool activities so they are not all just at home. While watching the playback I often see a forgotten picture 
          and it reminds me of a whole day triggering memories I haven't thought about since that time. To me, that is the beauty of this project.
        </p>
        <br/>
        
      </div>
    </div>
  );
}

export default PhotoED;
