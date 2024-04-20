import React from 'react';
import './robocv.css';
import birdVid from '../../assets/birdVid1.mp4';
import plot1 from '../../assets/plotout1.png';
import plot2 from '../../assets/plotout2.png';

const Robocv = () => {
    return (
        <div className='projectPage'>

            <video className='videoPlayer' controls muted>
                <source src={birdVid} type="video/mp4"/>
                This video does not contain audio tracks.
            </video>

            <div class="bottom-section">
                <h2>Inspiration</h2>
            </div>
            <div className="paragraphsPart2"> 
                <p> My inspiration for this project came from a GoPro timelapse I took of a bird feeder outside my house.
                    I was curious how many birds would share the space at once, especially which species intermingled the most.
                    Then I thought what if instead of footage of my backyard it was trail cam footage in the Amazon rainforest or other remote area?
                    I could use that footage to identify endangered animals, extrapolate their numbers and locate areas to target for conservation.
                </p>
                <br/>
                <p>
                    I have worked on computer vision projects from scratch in the past and it is quite a bit of work.
                    When I discovered Roboflow I wanted to try a proof of concept project to see how it works and I thought back to my idea of identifying birds. 
                    Roboflow made starting up a computer vision model remarkably easy and straightforward. My model is based on a youtube video of a bird feeder
                    because my video was quite far away and for this prototype I wanted to get a basic understanding of what I was working with.
                    I cannot stress enough how simple this was to use and how incredibly impressed I am based on my prior experience creating computer vision models. 
                </p>
            </div>
            <div class="bottom-section">
                <h2>Results</h2>
            </div>
            <div className="paragraphsPart2"> 
                <p> mAP: 96.9%, Precision: 92.4%, Recall: 90.2%
                </p>
                <p>
                    The model was exceptional at identifying classes from images sampled from the original video. A clip of the full output video can be seen at the top. 
                    However, I tried to run the model on pictures of cardinals I found on the internet but had varying results. 
                    Sometimes it was able to classify it correctly but often had a low confidence. 
                    Like most shortcomings of machine learning this is likely due to the training. With a more robust training set including pictures 
                    outside the original video and more augmentations I am sure it would have performed better on these examples.
                </p>
                <div className='plots'>
                    <img src={plot1} alt="plot 1" className="image"/>
                    <img src={plot2} alt="plot 2" className="image"/>
                </div>
                <p> I created these plots quickly with matplot to illustrate the bird's interactions. The first plot shows a breakdown of bird type visits by hour.
                    I should note hour is a loose term as I randomly divided up the video for my proof of concept. The second plot shows which birds shared the feeder together.
                    Theoretically this shows which species are compatible and intermingle, but this heatmap is admittedly not very helpful.
                    (Better analysis and ggplots coming soon) Since this was just a prototype, I want to further this effort by contacting conservation groups with trail cams.
                    Hopefully I could help cut down on the man hours it takes to watch video playback and provide analysis.
                </p>
            </div>
            <div className='roboflowPart'>
                <p>
                    Roboflow things I loved:
                </p>
                <br/>
                <p>
                    <ul>
                        <li>ease of add data and diversity of dataset options provided</li>
                        <li>simplicity of annotating images and all the tools in that view</li>
                        <li>everything about the health check section</li>
                        <li>effortless adding and changing for image preprocessing and augmentation </li>
                        <li>provided code samples for a multitude of languages</li>
                        <li>web app example showing potential nontechnical customer deployment</li>
                        <li>QR code for mobile deployment </li>
                    </ul>
                </p>
                <br/>
                <p>
                    Roboflow things to improve:
                </p>
                <br/>
                <p>  
                    <ul class="main-list">
                        <li>file or video comparison between different versions</li>
                        <li>clearer training and test set from the beginning
                            <ul>
                                <li>I held out 30% of my video to use for testing only to realize it was taken from the initial set</li>
                            </ul>
                        </li>
                        <li>resampling for an input video
                            <ul>
                                <li>I wanted to add more pictures after I got my original sample but didn't want the same pictures again</li>
                                <li>example if video is 60 fps take 15th frame first time and 45th frame second time</li>
                            </ul>
                        </li>
                        <li>bug fix where example web app gives different result compared with the 'Visualize' section</li>
                        <li>bug fixes for provided code for 'Try On My Machine'</li>
                        <li>example code for input and output video (easy enough to modify image code but not everyone may know how)</li>
                    </ul>
                    (I was on the free version. I am not sure if any of these are included in the paid version)
                </p>
            </div>

        </div>
    );
    }

export default Robocv;