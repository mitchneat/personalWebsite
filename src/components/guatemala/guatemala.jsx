import React from 'react';
import './guatemala.css';

import guat1 from '../../assets/Guatemala/airbnb_3b4.jpeg';
import guat2 from '../../assets/Guatemala/antigua_arch_3b4.jpg';
import guat3 from '../../assets/Guatemala/basketball_3b4.jpg';
import guat4 from '../../assets/Guatemala/bird_art_3b4.jpg';
import guat5 from '../../assets/Guatemala/bobby_lake_3b4.jpeg';
import guat6 from '../../assets/Guatemala/breakfast_3b4.jpg';
import guat7 from '../../assets/Guatemala/cool_pot_3b4.jpg';
import guat8 from '../../assets/Guatemala/dog_foodstand_3b4.jpg';
import guat9 from '../../assets/Guatemala/dog_on_hike_3b4.jpg';
import guat10 from '../../assets/Guatemala/dog_volc_3b4.jpg';
import guat11 from '../../assets/Guatemala/foodstand_3b4.jpg';
import guat12 from '../../assets/Guatemala/foodstand2_3b4.jpg';
import guat13 from '../../assets/Guatemala/guy_volc_3b4.jpeg';
import guat14 from '../../assets/Guatemala/guys_lake_3b4.jpeg';
import guat15 from '../../assets/Guatemala/jared_bobby_4b3.jpeg';
import guat16 from '../../assets/Guatemala/lakeAtitlan_4b3jpg.jpg';
import guat17 from '../../assets/Guatemala/local_food_sq.jpg';
import guat18 from '../../assets/Guatemala/lookout_3b4.jpg';
import guat19 from '../../assets/Guatemala/lookout_hills_3b4.jpg';
import guat20 from '../../assets/Guatemala/me_errupt_4b3.jpeg';
import guat21 from '../../assets/Guatemala/Me_hammock_3by4.jpeg';
import guat22 from '../../assets/Guatemala/me_sunrise_3b4.jpeg';
import guat23 from '../../assets/Guatemala/ridge_3b4.jpg';
import guat24 from '../../assets/Guatemala/sandwhich_sq.jpg';
import guat25 from '../../assets/Guatemala/stars_3b4.jpg';
import guat26 from '../../assets/Guatemala/stars_volcano_3b4.jpg';
import guat27 from '../../assets/Guatemala/steak_3b4.jpg';
import guat28 from '../../assets/Guatemala/street_dress_3b4.jpg';
import guat29 from '../../assets/Guatemala/street_shoppers_3b4.jpg';
import guat30 from '../../assets/Guatemala/tacos_3b4.jpg';
import guat31 from '../../assets/Guatemala/vol_first_arrive_3b4.jpg';
import guat32 from '../../assets/Guatemala/volc_back_3b4.jpg';
import guat33 from '../../assets/Guatemala/volc_exp_4b3.jpeg';
import guat34 from '../../assets/Guatemala/volcano_sunrise_4b3.jpg';
import guat35 from '../../assets/Guatemala/walkway_3b4.jpg';
import guat36 from '../../assets/Guatemala/yellow_white_church_3b4.jpg';
import guat37 from '../../assets/Guatemala/dog_walk_volcano_9b16.mp4'
import guat38 from '../../assets/Guatemala/volcanoMorningPan.mp4'
import guat39 from '../../assets/Guatemala/volcanoExplosion.mp4'
import guat40 from '../../assets/Guatemala/lakePan.mp4'
import guat41 from '../../assets/Guatemala/horse_dog_tree_3b4.jpg'


import paintBrush from '../../assets/Guatemala/brushstroke.png'

const images = [
  guat1,guat2,guat3,guat4,guat5,
  guat6,
  guat7,
  guat8,
  guat9, 
  guat10,
  guat11,
  guat12,
  guat13,
  guat14,
  guat15,
  guat16,
  guat17,
  guat18,
  guat19,
  guat20,
  guat21,
  guat22,
  guat23,
  guat24,
  guat25,
  guat26,
  guat27,
  guat28,
  guat29,
  guat30,
  guat31,
  guat32,
  guat33,
  guat34,
  guat35,
  guat36,
  guat37,
  guat38,
  guat39,
  guat40,
  guat41
]

const Guatemala = () => {
    return (
      <div className='background'>
        <div className='blogPage'>

          {/* Title */}
          <div className='titleblock'>

            <img src={paintBrush} alt="Brush Stroke" className="brush-stroke"/>
            <p className='title'>Guatemala</p>
          </div>
          
          {/* pics - Antigua*/}
          <div className='pictureRow'>

            <div class="picture-box" >
              <p >
              Along with my friends Bobby and Jared, I flew to Guatemala City in November 2024.
              From there, we caught a ride to Antigua, where we spent the evening and the following day
              exploring the city's stunning colonial architecture and vibrant atmosphere.
              </p>
            </div>
            <img src={images[1]} alt="Guat 6" className="imagegups"/>                    
            <img src={images[5]} alt="Guat 7" className="imagegups"/>
            <img src={images[34]} alt="Guat 8" className="imagegups"/>
            <img src={images[35]} alt="Guat 9" className="imagegups"/>
          
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

            <img src={images[8]} alt="Guat 6" className="imagegup"/>                    
            <img src={images[31]} alt="Guat 7" className="imagegup"/>
            <img src={images[30]} alt="Guat 8" className="imagegup"/>
            <img src={images[19]} alt="Guat" className="imagegul"/> 
            
          </div>

          {/* 4 pics/videos/text - volcano explosion*/}
          <div className='pictureRow'>
          <img src={images[9]} alt="Guat" className="imagegup"/>
            <div class="picture-box" style={{ width: "50%" }} >
              <p>
              What followed was an absolutely mind-blowing natural wonder — checked off 
              the bucket list!
              </p>
            </div>
            <video className='imagegups' controls muted>
              <source src= {images[38]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <video className='imagegups' controls muted>
              <source src= {images[39]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
          </div>

          {/* 4.5 pics - volcano 2*/}
          <div className='pictureRow'>
            <img src={images[32]} alt="Guat" className="imagegul"/>
            <img src={images[32]} alt="Guat" className="imagegul"/>
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
            <img src={images[24]} alt="Guat" className="imagegup"/>
            <img src={images[25]} alt="Guat" className="imagegup"/>
            <img src={images[22]} alt="Guat" className="imagegup"/>
            <img src={images[40]} alt="Guat" className="imagegup"/>
          </div>

          {/* 7 pics - sunrise 2*/}
          <div className='pictureRow'>
            <img src={images[32]} alt="Guat" className="imagegul"/>
            <img src={images[33]} alt="Guat" className="imagegul"/>
          </div>

          {/* 8 video sunrise 3*/}
          <div className='pictureRow'>
            <img src={images[12]} alt="Guat" className="imagegup"/>
            <video className='imagegups' controls muted>
              <source src= {images[37]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <video className='imagegups' controls muted>
              <source src= {images[36]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
          </div>

          {/* 9 pics - sunrise 4*/}
          <div className='pictureRow'>
            
            <img src={images[21]} alt="Guat" className="imagegup"/>
            <img src={images[14]} alt="Guat" className="imagegul"/>
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
            
            <img src={images[15]} alt="Guat" className="imagegul"/>
            <img src={images[13]} alt="Guat" className="imagegup"/>
            <div className='stacked'>
              <img src={images[23]} alt="Guat" className="imagegu_sq"/>
              <img src={images[16]} alt="Guat" className="imagegu_sq"/>
            </div>
          </div>

          {/* 12 pics/video - Atitlan/ Pana */}
          <div className='pictureRow'>
            
            <img src={images[4]} alt="Guat" className="imagegup"/>
            <img src={images[0]} alt="Guat" className="imagegup"/>
            <video className='imagegups' controls muted>
              <source src= {images[39]} type="video/mp4" />
              This video does not contain audio tracks.
            </video>
            <img src={images[20]} alt="Guat" className="imagegup"/>
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
            
            <img src={images[11]} alt="Guat" className="imagegup"/>
            <img src={images[29]} alt="Guat" className="imagegup"/>
            <img src={images[10]} alt="Guat" className="imagegup"/>
            <img src={images[7]} alt="Guat" className="imagegup"/>
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
            <img src={images[27]} alt="Guat" className="imagegup"/>
            <img src={images[6]} alt="Guat" className="imagegup"/>
            <img src={images[2]} alt="Guat" className="imagegul"/>
            <img src={images[28]} alt="Guat" className="imagegup"/>
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
               down by the water, drawn to a 40-foot platform perfect for cliff jumping. 
               I couldn't resist. I jumped in, and then spent the rest of the afternoon 
               swimming and enjoying the sunshine.
              </p>
            </div>            
          </div>

          {/* 18 pics - San marcos */}
          <div className='pictureRow'>
            <img src={images[3]} alt="Guat" className="imagegup"/>
            <img src={images[3]} alt="Guat" className="imagegup"/>
            <img src={images[17]} alt="Guat" className="imagegup"/>
            <img src={images[18]} alt="Guat" className="imagegup"/>
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
            <img src={images[3]} alt="Guat" className="imagegup"/>
            <img src={images[3]} alt="Guat" className="imagegup"/>
            <img src={images[17]} alt="Guat" className="imagegup"/>
            <img src={images[18]} alt="Guat" className="imagegup"/>
          </div>


            
        </div>
      </div>
    );
    }

export default Guatemala;