// import React, { Component } from 'react';
import React from 'react';

import './photoEveryday.css';
import fullVid from '../../assets/composite.mp4';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';

// class MyVideoPlayer extends Component {
//   constructor(props) {
//     super(props);
//     this.videoNode = React.createRef();
//   }

//   componentDidMount() {
//     // Initialize Video.js if the component is mounted
//     this.player = videojs(this.videoNode.current, this.props, function onPlayerReady() {
//       console.log('Player is ready');
//     });
//   }

//   componentWillUnmount() {
//     if (this.player) {
//       this.player.dispose();
//     }
//   }

//   render() {
//     return (
//       <div data-vjs-player>
//         <video ref={this.videoNode} className="video-js" controls>
//           <source src={this.props.src} type="video/mp4" />
//         </video>
//       </div>
//     );
//   }
// }
const PhotoED = () => {
  return (

    <div className='videoPage'>
      <video className='videoPlayer' controls muted>
          <source src={fullVid} type="video/mp4"/>
          This video does not contain audio tracks.
      </video>



      <div className="about-section">
        <h2><span class="line"></span> About <span class="line"></span></h2>
          <p> I started taking a picture of myself (almost) everyday at the end of June in 2021. I had seen a couple videos of people doing this, specifically Hugo Cornellier and Christoph Rehage,
            and wanted to do the same. For almost 2 years I didn't do anything with the pictures expecting the project
            to the work of decades not months. In recent months I have been forgetful of my daily picture especially when I am traveling therefore missing the coolest pictures. 
            I realized if I wanted to motivate myself to continue I should put the video together. I want to note I recognize I may look sad with a stoic facial expression 
            but I was trying to create the same expression everyday. It is hard to look back even just 3 years to see how different I looked but I am hopeful it will be a 
            worthwhile project when I am 75 years old looking back.
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
