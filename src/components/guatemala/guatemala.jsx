import React from 'react';
import './guatemala.css';
import mediaData from '../../assets/Media/Guatemala.json'

const media = mediaData.map(item => item.url); 

const Guatemala = () => {
    return (
      <div className='background'>
        <div className='blogPage'>

          {/* Title */}
          <div className='titleblock'>

            <p className='title'> {"\u2013"} Guatemala {"\u2013"}</p>
          </div>
          
          {/* text - start */}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "60%" }}>
            <p>
              Along with my friends Bobby and Jared, I flew to Guatemala City in November 2024.
              From there, we caught a ride to Antigua, where we spent the evening and the following day
              exploring the city's stunning colonial architecture and vibrant atmosphere.           
            </p>
            </div>
          </div>

          {/* pics - Antigua*/}
          <div className='pictureRow'>

            <img src={media[3]} alt="Guat" className="imagegups"/>     
            <img src={media[4]} alt="Guat" className="imagegups"/>               
            <img src={media[9]} alt="Guat" className="imagegups"/>
            <img src={media[51]} alt="Guat" className="imagegups"/>
            <img src={media[52]} alt="Guat" className="imagegups"/>
          
          </div>

          {/* 2 text - transition to volcano*/}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "60%" }}>
            <p>
              The next morning, we were up by 6 a.m. and headed to OX Adventures to begin our volcano trek.
              After a quick breakfast, we embarked on a long van ride through rolling hills that grew
              increasingly steep. By 9 a.m., we reached the trailhead beside a remote farm and set off on
              our ascent. 
              <br></br>
              The hike was every bit as challenging as promised, with relentless inclines cutting
              through farmland and three distinct forest zones. A few energetic stray dogs joined our group,
              keeping pace as we climbed. By 3:15 p.m., we finally reached base camp, but the volcano itself
              remained elusive, cloaked in thick clouds of ash.
              <br></br>
              Around 4:30, we began our ascent to the closest ridge of the eruption Fuego volcano.
              The trail dipped before rising steeply again, and with our loyal canine companions
              by our side, we arrived around 6:30.            
            </p>
            </div>
          </div>

          {/* 3 pics - hike*/}
          <div className='pictureRow'>

            <img src={media[12]} alt="Guat 6" className="imagegup"/>                    
            <img src={media[45]} alt="Guat 7" className="imagegup"/>
            <img src={media[44]} alt="Guat 8" className="imagegup"/>
            <img src={media[33]} alt="Guat" className="imagegul"/> 
            
          </div>

          {/* 4 pics/videos/text - volcano explosion*/}
          <div className='pictureRow'>

            <img src={media[13]} alt="Guat" className="imagegup"/>
            <div className="picture-box" style={{ width: "50%" }} >
              <p>
              What followed was an absolutely mind-blowing natural wonder — checked off 
              the bucket list!
              </p>
            </div>
            <video className='imagegup2' controls muted>
              <source src= {media[47]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <img src={media[16]} alt="Guat" className="imagegul"/>
          </div> 

          {/* 4.5 pics - volcano 2*/}
          <div className='pictureRow'>
            <img src={media[17]} alt="Guat" className="imagegul"/>
            <img src={media[15]} alt="Guat" className="imagegul"/>
          </div>          

          {/* 5 text - about until morning*/}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "70%" }} >
              <p>
              Exhausted and hungry, we stumbled back to base camp around 9:30, still able to watch the
              eruptions—now from a safer distance. Over a shared meal and drinks 
              (which seemed to be a mandatory ritual around the fire with our local guides), 
              we unwound before catching a few short hours of sleep. At 3 a.m., we were up again. 
              The stars at that hour were mesmerizing, but our real goal was reaching the summit of
               Acatenango in time for sunrise. Despite our fatigue, the sight of clouds rolling over 
               and around the volcanoes during golden hour made every step worth it.
              </p>
            </div>            
          </div>

          {/* 6 pics - sunrise 1*/}
          <div className='pictureRow'>
            <img src={media[38]} alt="Guat" className="imagegup"/>
            <img src={media[39]} alt="Guat" className="imagegup"/>
            <img src={media[46]} alt="Guat" className="imagegul"/>

          </div>

          {/* 7 pics - sunrise 2*/}
          <div className='pictureRow'>
            
            <img src={media[50]} alt="Guat" className="imagegul"/>
            <img src={media[35]} alt="Guat" className="imagegup"/>
            <img src={media[21]} alt="Guat" className="imagegup"/>
          </div>

          {/* 8 video sunrise 3*/}
          <div className='pictureRow'>
            <img src={media[34]} alt="Guat" className="imagegup"/>
            <video className='imagegup2' controls muted>
              <source src= {media[48]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <video className='imagegup2' controls muted>
              <source src= {media[14]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <img src={media[24]} alt="Guat" className="imagegul"/>
          </div>


          {/* 10 text - about going to pana*/}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "70%" }} >
              <p>
              After a grueling descent, a long van ride, and another transfer to Panajachel, 
              we finally arrived at our beautiful Airbnb along Lake Atitlán — a perfect place to rest 
              and recharge. Over the next couple of days, we took it easy, indulging in local food and 
              exploring Panajachel. Outside the town, we kayaked around on the lake, soared through 
              the jungle on ziplines, and wandered through a butterfly garden.
              </p>
            </div>            
          </div>

          {/* 11 pics - Atitlan/ Pana */}
          <div className='pictureRow'>
            
            <img src={media[27]} alt="Guat" className="imagegul"/>
            <img src={media[22]} alt="Guat" className="imagegup"/>
            <div className='stacked'>
              <img src={media[37]} alt="Guat" className="imagegu_sq"/>
              <img src={media[30]} alt="Guat" className="imagegu_sq"/>
            </div>
          </div>

          {/* 12 pics/video - Atitlan/ Pana */}
          <div className='pictureRow'>
            
            <img src={media[8]} alt="Guat" className="imagegup"/>
            <img src={media[1]} alt="Guat" className="imagegup"/>
            <video className='imagegup2' controls muted>
              <source src= {media[28]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <img src={media[0]} alt="Guat" className="imagegup"/>
          </div>

          {/* 13 text - about going to san pedro*/}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "70%" }} >
              <p>
              From there, we took a boat across the lake to San Pedro, where we spent more time 
              unwinding and immersing ourselves in the local culture—most notably by sampling every
               street food. 
              </p>
            </div>            
          </div>

          {/* 14 pics - San Pedro food pics */}
          <div className='pictureRow'>
            
            <img src={media[18]} alt="Guat" className="imagegup"/>
            <img src={media[43]} alt="Guat" className="imagegup"/>
            <img src={media[19]} alt="Guat" className="imagegup"/>
            <img src={media[11]} alt="Guat" className="imagegup"/>
          </div>

          {/* 15 text - about going to san juan*/}
          <div className='pictureRow'>

            <div className="picture-box" style={{ width: "70%" }} >
              <p>
              Whether it was from street food or from the water we 
              all got fairly sick - which only gave us more reason to slow down and take it easy. 
              With Jared leaving to start a new job, Bobby and I took a boat to explore 
              the nearby artisan town of San Juan.
              </p>
            </div>            
          </div>

          {/* 16 pics - San Juan */}
          <div className='pictureRow'>
            <img src={media[41]} alt="Guat" className="imagegup"/>
            <img src={media[10]} alt="Guat" className="imagegup"/>
            <img src={media[6]} alt="Guat" className="imagegul"/>
            <img src={media[42]} alt="Guat" className="imagegup"/>
          </div>

          {/* 17 text - about going to san marcos*/}
          <div className='pictureRow'>
            <div className="picture-box" style={{ width: "70%" }} >
              <p>
               Later, I continued on to San Marcos
               while Bobby, still feeling unwell, headed back to rest. Each town had its 
               own distinct character, and San Marcos was no exception—known for its laid-back, 
               yoga-focused vibe. I hiked up the nearby nature reserve and, to my surprise, 
               had the peak all to myself. It wasn't hard to see why—most people were gathered 
               down by the water, drawn to a 40-foot cliff diving platform. 
               I jumped in, and then spent the rest of the afternoon 
               swimming and enjoying the sunshine.
              </p>
            </div>            
          </div>

          {/* 18 pics - San marcos */}
          <div className='pictureRow'>

            <img src={media[25]} alt="Guat" className="imagegup"/>
            <img src={media[36]} alt="Guat" className="imagegul"/>
            <img src={media[32]} alt="Guat" className="imagegup"/>
          </div>

          {/* 19 text - final day*/}
          <div className='pictureRow'>
            <div className="picture-box" style={{ width: "70%" }} >
              <p>
              On my final day, I spent most of it relaxing, enjoying the calm of the lake.
              As the day came to a close, I watched as dusk rolled in and the lights from 
              the towns across the water began to flicker on. Below are a few more honorable
              mention photos—capturing the stunning plants, wildlife, landscapes, and unforgettable
              memories from the trip.
              </p>
            </div>            
          </div>

          {/* 20 pics - final and extras */}
          <div className='pictureRow'>
          <img src={media[20]} alt="Guat" className="imagegup"/>
            <img src={media[31]} alt="Guat" className="imagegup"/>
            <img src={media[23]} alt="Guat" className="imagegup"/>
            <img src={media[40]} alt="Guat" className="imagegup"/>
          </div>

          {/* 21 pics - extras */}
          <div className='pictureRow'>
            <img src={media[5]} alt="Guat" className="imagegup"/>           
            <img src={media[7]} alt="Guat" className="imagegup"/>
            <img src={media[29]} alt="Guat" className="imagegul"/>
          </div>


            
        </div>
      </div>
    );
    }

export default Guatemala;