import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./landing.css";
import me from "../../assets/me3_66fileresize.jpg";
import ME2 from "../../assets/New England/maine1_resize.jpg";
import ME3 from "../../assets/New England/pic2_resize.jpg";

import obx from "../../assets/Landing/obx.jpg";
import football from "../../assets/Landing/football.jpg";
import redsox from "../../assets/Landing/redsox.jpg";
import dc from "../../assets/Landing/dc.jpg";
import grad from "../../assets/Landing/grad.jpg";

import swed from "../../assets/Landing/Viking.JPG";
import row from "../../assets/Landing/rowing1.jpg";

import car from "../../assets/Landing/vette.jpg";
import vt from "../../assets/Landing/VT.jpg";
import tahoe from "../../assets/Landing/tahoe.jpg";
import hike from "../../assets/Landing/vahike.jpg";
import greatfalls from "../../assets/Landing/greatfalls.jpg";

import indo from "../../assets/Landing/indo.JPG";
import polo from "../../assets/Landing/polo.jpg";
import utah2 from "../../assets/Landing/utah.JPG";
import dalia from "../../assets/Landing/dalia.jpg";
import thai from "../../assets/Landing/thailand.jpg";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Track sidebar visibility
  const [currentSection, setCurrentSection] = useState(0);
  // const [titleColor, setTitleColor] = useState('white'); 
  // const [textColor, setTextColor] = useState('rgb(146, 57, 235)');
  const [textShadow, setTextShadow] = useState('2px 2px 4px rgba(0, 0, 0, 0.5)');


  // Circle dimensions and spacing
  const circleHeight = 30; // Height of each circle
  const circleGap = 10; // Gap between circles
  const totalCircles = 5; // Total number of circles
  const lineHeight = (circleHeight * totalCircles) + (circleGap * (totalCircles - 1)); // Total height for the line

  useEffect(() => {
    const sections = document.querySelectorAll(".aboutPage");
    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];
    
    // Global scroll-based color change (from first aboutPage section to last)
    ScrollTrigger.create({
      trigger: firstSection,
      start: "top top",  // Start when the first section enters the viewport
      endTrigger: lastSection,
      end: "bottom bottom",  // End when the last section is completely out of view
      scrub: true,  // Smooth color change
      onUpdate: (self) => {
        const progress = self.progress; // Progress of scroll from 0 to 1
        const newColor = `rgb(${Math.floor(30 + (255 - 30) * progress)}, ${Math.floor(30 + (255 - 30) * progress)}, ${Math.floor(30 + (255 - 30) * progress)})`;
        gsap.to("body", {
          backgroundColor: newColor,
          duration: 0.1,
        });

      // // Change text color based on scroll progress
      // const newTitleColor = `rgb(${Math.floor(255 * (1 - Math.min(progress * 1.15, 1)))}, ${Math.floor(255 * (1 - Math.min(progress * 1.15, 1)))}, ${Math.floor(255 * (1 - Math.min(progress * 1.15, 1)))})`;
      // setTitleColor(newTitleColor);
      

      // // Define your start and end colors for the text transition
      // const startColor = { r: 146, g: 57, b: 235 }; // Light purple
      // const endColor = { r: 55, g: 20, b: 87 }; // Dark purple

      // // Interpolate the color based on the scroll progress
      // const newTextColor = {
      //   r: Math.floor(startColor.r + (endColor.r - startColor.r) * progress),
      //   g: Math.floor(startColor.g + (endColor.g - startColor.g) * progress),
      //   b: Math.floor(startColor.b + (endColor.b - startColor.b) * progress),
      // };

      // // Set the new text color
      // setTextColor(`rgb(${newTextColor.r}, ${newTextColor.g}, ${newTextColor.b})`);

      const shadowIntensity = Math.max(0.5, 1 - progress); // Adjust the intensity based on progress
      setTextShadow(`2px 2px 4px rgba(0, 0, 0, ${shadowIntensity})`);

      },
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
    
      // Trigger the sidebar when 25% of the first section is visible
      if (scrollPosition >= firstSection.offsetTop - (windowHeight * 0.5)) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    
      // Update the active circle based on the current scroll position
      sections.forEach((section, index) => {
        console.log(section);
        console.log(index);
        if (scrollPosition >= section.offsetTop - (windowHeight * 0.5) ) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="landing">
        <div className="top-section">
          <div className="introContent">
            <span className="hello">Hello, I'm </span>
            <span className="name">Mitch Neat  </span>
            
            <p className="aboutpg">
              Thanks for coming to my website, scroll down to learn a little about me!
            </p>
          </div>
          <div className="profileImg">
            <img src={me} alt="Profile" className="bg" />
          </div>
        </div>

        {/* <div className="bottom-section-land">
          <h2>About</h2>
        </div> */}
      </section>

      <div className="aboutTimeline">
        {sidebarVisible && (
          <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>

            <Link to="landing" smooth={true} duration={500} className="house-icon">
              <i className="fas fa-home"></i>
            </Link>
            {/* <div className="house-icon">
              <i className="fas fa-home"></i>
            </div> */}

            <div className="line" style={{ height: `${lineHeight}px` }}></div>
            <div className="circles">
              {Array.from({ length: totalCircles }, (_, index) => (
                <Link
                  to={`about${index + 1}`}
                  smooth={true}
                  duration={500}
                  key={index}
                >
                  <div
                    className="circle"
                    id={`circle${index + 1}`}
                    style={{
                      backgroundColor: index === currentSection ? '#9239eb' : '#000',
                      height: `${circleHeight}px`,
                      width: `${circleHeight}px`,
                    }}
                  ></div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="AboutContent">
          <section className="aboutPage" id="about1">
            <h2 className='abTitle c1'>Growing up south of Boston</h2>
            <div className="aboutSectionContent normalLayout">
                {/* skier animation as you scroll */}
                <p className='abpara topBody'>
                  I grew up south of Boston playing almost every sport but ended up following my family's tradition and taking up rowing throughout high school. 
                </p>
                <div className="aboutImages ab1">
                  <div className="row">
                      <img src={football} alt="ab1-1" className="abp" />
                      <img src={row} alt="ab1-2" className="abp" />
                  </div>
                  <div className="row">
                      <img src={ME3} alt="ab1-3" className="abp" />
                  </div>
                </div>
                <div className="mobileImagesLayout">
                  <img src={football} alt="ab1-1" className="abp" />
                  <img src={row} alt="ab1-2" className="abp" />
                  <img src={ME3} alt="ab1-3" className="abp" />
                </div>
            </div>

          </section>
          <section className="aboutPage" id="about2">
            <h2 className='abTitle c1'>Exploring New England and Beyond</h2>
            <div className="aboutSectionContent reverseLayout">
                {/* boat rowing in background as you scroll, other sports? save football for tech*/}
                <p className='abpara topBody'>
                  I loved exploring Boston and the great outdoors New England has to offer through skiing, hiking, and every water activity I could. 
                  A few family trips outside the United States ignited an ever burning curiosity to travel and continue to experience new places, cuisine, cultures, and people. 
                </p>
                <div className="aboutImages ab1">
                    {/* pic in Sweden? -a couple international pictures, pic playing football or a sport growing up, head of the charles picture */}
                  <div className="row">
                    <img src={redsox} alt="ab4-1" className="abp" />
                    <img src={swed} alt="ab4-2" className="abp" />
                  </div>
                  <div className="row">
                      <img src={ME2} alt="ab4-3" className="abp" />
                  </div>
                </div>
                <div className="mobileImagesLayout">
                  <img src={redsox} alt="ab4-1" className="abp" />
                  <img src={swed} alt="ab4-2" className="abp" />
                  <img src={ME2} alt="ab4-3" className="abp" />
                </div>
            </div>
          </section>
          <section className="aboutPage" id="about3">
            <h2 className='abTitle c1'>Graduating Virginia Tech</h2>
            <div className="aboutSectionContent normalLayout"> 
                {/* books stacking animation as you scroll?, football being thrown */}
                <p className='abpara topBody'>
                  I studied Computational Modeling and Data Analytics with a concentration in Biological Sciences. Through my coursework and various internships I developed a versatile skill set across frontend and backend development, model development, dashboard design, analytical work, and data engineering. Outside of the classroom, I had a great time exploring southwest Virginia and rooting for the Hokies with the friends I made along the way.
                </p>
                <div className="aboutImages2 ab2">
                  <div className="row3">
                    <img src={vt} alt="ab4-1" className="abpLandscape2" />
                  </div>
                  <div className="rowSplit">
                    <img src={hike} alt="ab4-3" className="abpP" />
                    <img src={grad} alt="ab4-2" className="abpP" />
                  </div>
                </div>
                <div className="mobileImagesLayout">
                  <img src={vt} alt="ab4-1" className="abpLandscape2" />
                  <img src={hike} alt="ab4-3" className="abpP" />
                  <img src={grad} alt="ab4-2" className="abpP" />
                </div>
            </div>
          </section>
          <section className="aboutPage" id="about4">
            <h2 className='abTitle c4'>Moving to Arlington</h2>
            <div className="aboutSectionContent reverseLayout"> 
              {/* movig truck animation?, fireworks behind dc monument? - I don't know how these work yet */}
              <p className='abpara bottomBody'>
                After spending some time in my beloved New England, I moved to Arlington to be closer to my office as work transitioned to a hybrid environment.
                At JDSAT, I've taken on a variety of roles, contributing to the needs of this small but rapidly growing company while continuing to sharpen my analytical and programming skills.
                This has given me the opportunity to explore a new city and region of the country with my friends in this post-grad chapter of my life.
              </p>
              <div className="aboutImages2 ab2">
                  <div className="row3">
                    <img src={obx} alt="ab4-1" className="abpLandscape" />
                  </div>
                  <div className="rowSplit">
                    <img src={dc} alt="ab4-3" className="abpP" />
                    <img src={greatfalls} alt="ab4-2" className="abpP" />
                  </div>
              </div>
              <div className="mobileImagesLayout">
                <img src={obx} alt="ab4-1" className="abpLandscape" />
                <img src={dc} alt="ab4-3" className="abpP" />
                <img src={greatfalls} alt="ab4-2" className="abpP" />
              </div>
            </div>
          </section>
          <section className="aboutPage Bottom" id="about5">
            <h2 className='abTitle c4'>What have I been up to recently? </h2>
            {/* car spinning tires, puppy, plane taking off animations*/}
            {/* add dog names below picutes of them */}
            <div className="aboutSectionBottom"> 

              <div className="part1">
                <p className='abpara2 bottomBody'>
                  I visitied my sister traveling around the world in Thailand and Indonesia.
                </p>
                <div className="pics">
                    <img src={indo} alt="ab5-1" className="abpdouble"/>
                    <img src={thai} alt="ab5-5" className="abpdouble"/>
                </div>
                
              </div>

              <div className="part1">              
                <div className="pics">
                    <img src={utah2} alt="ab5-3" className="abpdouble"/>  
                    <img src={tahoe} alt="ab5-3" className="abpdouble"/>
                </div>
                <p className='abpara2 bottomBody'>
                  I spent the winters skiing around Salt Lake City and Lake Tahoe.
                </p>
              </div>

              <div className="part1">
                <p className='abpara2 bottomBody'>
                  I have been fostering the best pups and my new four legged best friends.
                </p>
                <div className="pics">
                    <img src={dalia} alt="ab5-4" className="abpport"/>
                    <img src={polo} alt="ab5-2" className="abpport"/>
                </div> 
              </div>

              <div className="part1">
                <div className="pics">
                    <img src={car} alt="ab5-4" className="abpsingle"/>
                    {/* <img src={car2} alt="ab5-2" className="abpdouble"/> */}
                </div>
                <p className='abpara2 bottomBody'>
                  I have also developed a passion for working on cars particularly an 88' Corvette I fixed up into a daily driver.
                </p>
              </div>


              <div className="mobileImagesLayout">
                  <div className="mblpt">
                    <p className='mobileBottomText'>
                      I visitied my sister traveling around the world in Thailand and Indonesia.
                    </p>
                    <img src={indo} alt="ab5-1" className="abpdouble"/>
                    <img src={thai} alt="ab5-5" className="abpdouble"/>
                  </div>
                  
                  <div className="mblpt">
                    <p className='mobileBottomText'>
                      I spent the winters skiing around Salt Lake City and Lake Tahoe.
                    </p>
                    <img src={utah2} alt="ab5-3" className="abpdouble"/>  
                    <img src={tahoe} alt="ab5-3" className="abpdouble"/>
                  </div>

                  <div className="mblpt">
                    <p className='mobileBottomText'>
                      I have been fostering the best pups and my new four legged best friends.
                    </p>
                    <img src={dalia} alt="ab5-4" className="abpport"/>
                    <img src={polo} alt="ab5-2" className="abpport"/>
                  </div>

                  <div className="mblpt">
                    <p className='mobileBottomText'>
                      I have also developed a passion for working on cars particularly an 88' Corvette I fixed up into a daily driver.
                    </p>
                    <img src={car} alt="ab5-4" className="abpsingle"/>
                  </div>                 
                  
              
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
