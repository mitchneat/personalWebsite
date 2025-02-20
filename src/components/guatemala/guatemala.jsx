import React from 'react';
import './guatemala.css';

// import guat1 from '../../assets/Guatemala/lakeAtitlan_16by9.jpg';
// import guat2 from '../../assets/Guatemala/volcano_exp_16by9.jpeg';
// import guat3 from '../../assets/Guatemala/volcano_sunrise_16by9.jpg';
// import guat4 from '../../assets/Guatemala/antigua_16by9.jpg';
import guat5 from '../../assets/Guatemala/Me_hammock_3by4.jpeg';
import guat6 from '../../assets/Guatemala/antigua_arch_3b4.jpg';
import guat7 from '../../assets/Guatemala/breakfast_3b4.jpg';
import guat8 from '../../assets/Guatemala/walkway_3b4.jpg';
import guat9 from '../../assets/Guatemala/yellow_white_church_3b4.jpg';
import guat10 from '../../assets/Guatemala/volc_exp_4b3.jpeg';
import guat11 from '../../assets/Guatemala/vol_first_arrive_3b4.jpg';
import guat12 from '../../assets/Guatemala/volc_back_3b4.jpg';
import guat13 from '../../assets/Guatemala/dog_volc_3b4.jpg';
import guat14 from '../../assets/Guatemala/dog_on_hike_3b4.jpg';

const Guatemala = () => {
    return (
      <div className='blogPage'>
        <p className='title'>Guatemala</p>
        {/*   */}
        
        <pictureRow>
          <div class="picture-box">
            <p>
            Along with my friends Bobby and Jared, I flew to Guatemala City in November of 2024. We caught a ride to Antigua 
            and spent the evening as well as the next day exploring the beautiful colonial city.
            </p>
          </div>
          <img src={guat6} alt="Guat 6" className="imagegups"/>                    
          <img src={guat7} alt="Guat 7" className="imagegups"/>
          <img src={guat8} alt="Guat 8" className="imagegups"/>
          <img src={guat9} alt="Guat 9" className="imagegups"/>
        </pictureRow>
        <pictureRow>
          <img src={guat14} alt="Guat 6" className="imagegups"/>                    
          <img src={guat11} alt="Guat 7" className="imagegups"/>
          <img src={guat12} alt="Guat 8" className="imagegups"/>
          <img src={guat13} alt="Guat 9" className="imagegups"/>
          <div class="picture-box">
            <p>
            Along with my friends Bobby and Jared, I flew to Guatemala City in November of 2024. We caught a ride to Antigua 
            and spent the evening as well as the next day exploring the beautiful colonial city.
            </p>
          </div>
        </pictureRow>
        <pictureRow>
          <img src={guat8} alt="Guat 8" className="imagegup"/>
          <img src={guat9} alt="Guat 9" className="imagegup"/>
          <img src={guat5} alt="Guat 5" className="imagegup"/>
        </pictureRow>
        <p className='comments'>
          Along with my
        </p>
        <pictureRow>
          <img src={guat10} alt="Guat 10" className="imagegul"/>
          <img src={guat5} alt="Guat 5" className="imagegup"/>
          {/* <img src={guat2} alt="Guat 2" className="imagegup"/>                     */}
          {/* <img src={guat3} alt="Guat 3" className="imagegup"/> */}
          {/* <img src={guat4} alt="Guat 4" className="imagegup"/> */}
        </pictureRow>
          
      </div>
    );
    }

export default Guatemala;