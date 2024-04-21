import React from 'react';
import './photoEveryday.css';
import fullVid from '../../assets/composite.mp4';

const PhotoED = () => {
  return (

    <div className='videoPage'>
      <video className='videoPlayer' controls muted>
          <source src={fullVid} type="video/mp4"/>
          This video does not contain audio tracks.
      </video>

      <div class="bottom-section">
                <h2>Details</h2>
      </div>
      <div className="paragraphsPart"> 
      
        <p> In June 2021, I embarked on a personal project inspired by videos I had seen of individuals like Hugo Cornellier and Christoph Rehage. 
          Each day, I took a photo of myself, intending to document my growth and evolution over the span of my lifetime. For nearly two years, 
          I let the collection of photos accumulate, envisioning the project as a long-term endeavor spanning decades rather than mere months. 
          Recently, I decided it was time to compile a comprehensive video showcasing the progression. To do this I developed a python script that reads 
          in all of the images, aligns them, and splices them together in a video. I want to note that while I may appear somber, it was an unintentional 
          side effect as I aimed to maintain a consistent facial expression every day. It is hard to look back even just 3 years to see how different 
          I looked but I am hopeful it will be a worthwhile project when I am 75 years old. While watching the playback I often see a forgotten picture 
          and it reminds me of a whole day triggering memories I haven't thought about since that time. To me, that is the beauty of this project.
        </p>
        <br/>
        <p> 
          I will update this video every few months with the additional pictures. I will also be adding month, year, and location to the video soon. If you have any suggestions or feedback please contact me. 
          I know one at least one picture is centered on a friend of mine instead of me. Did you catch it?
        </p>
      </div>
    </div>
  );
}

export default PhotoED;
