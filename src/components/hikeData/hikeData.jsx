import React, { useEffect, useRef } from 'react';
import './hikeData.css';

const TableauDashboard = () => {
  const tableauRef = useRef(null);

  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = callback;
      document.body.appendChild(script);
    };

    loadScript('https://public.tableau.com/javascripts/api/viz_v1.js', initViz);

    return () => {
      const existingScript = document.querySelector(`script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const initViz = () => {
    const vizElement = document.getElementById('viz1720485322360');
    const vizUrl = 'https://public.tableau.com/app/profile/mitchell.neat/viz/Dunks2022ATHike/THEHike';

    const vizOptions = {
      width: '100%',
      height: '100%',
      hideTabs: true,
      onFirstInteractive: function() {
        const tableauViz = window.tableau.VizManager.getVizs()[0];
        tableauViz.addEventListener(window.tableau.TableauEventName.VIZ_RESIZE, function(event) {
          console.log(event.getAvailableSize());
        });
      }
    };

    if (vizElement) {
      new window.tableau.Viz(vizElement, vizUrl, vizOptions);
    }
  };

  return (
    <div className='bg_padding'> 
      {/* <h1>Tableau Dashboard made for my dad's hike of the appalachian trail in 2022</h1> */}
      <div className='tableauContainer' ref={tableauRef} dangerouslySetInnerHTML={{ __html: `
        <div className='tableauPlaceholder' >
          <object class='tableauViz' >
            <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
            <param name='embed_code_version' value='3' />
            <param name='site_root' value='' />
            <param name='name' value='Dunks2022ATHike/THEHike' />
            <param name='tabs' value='no' />
            <param name='toolbar' value='yes' />
            <param name='static_image' value='https://public.tableau.com/static/images/Du/Dunks2022ATHike/THEHike/1.png' />
            <param name='animate_transition' value='yes' />
            <param name='display_static_image' value='yes' />
            <param name='display_spinner' value='yes' />
            <param name='display_overlay' value='yes' />
            <param name='display_count' value='yes' />
            <param name='language' value='en-US' />
            <param name='filter' value='publish=yes' />
          </object>
        </div>
      ` }} />
      <div className='writeUp'>
      <div class="bottom-section-at">
                <h2>Details</h2>
      </div>
      <div className="paragraphsPart"> 
      
        <p> From June 21 to November 14 2022 my dad hiked the entire Appalachian trail starting in Mount Katahdin in Maine and going all the way to Springer Mountain in Georgia.
          Along the way he collected data about each day through his Garmin watch and journal.
          This is a breakdown of some of the interesting statistics. His trail name was Dunk hence the title of the dashboard.
          If you would like to learn more about his experience,
          he wrote a book titled 'An Appalachian Trail Thru-Hike: Preparing, Setting Expectations, and Mastering Mindset.'
          It is coming out soon and sure to be a best seller so keep an eye out!
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default TableauDashboard;
