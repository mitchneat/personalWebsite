import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./landing.css";
import me from "../../assets/me3.jpg";
import ME1 from "../../assets/New England/fallBoston.JPG";
import ME2 from "../../assets/New England/maine1_resize.jpg";
import ME3 from "../../assets/New England/pic2_resize.jpg";

import obx from "../../assets/Landing/obx.jpg";
import football from "../../assets/Landing/football.jpg";
import redsox from "../../assets/Landing/redsox.jpg";
import dc from "../../assets/Landing/dc.jpg";
import grad from "../../assets/Landing/grad.jpg";

import swed from "../../assets/Landing/Viking.JPG";
import row from "../../assets/Landing/rowing1.jpg";

import car from "../../assets/Landing/vette1.jpg";
import car2 from "../../assets/Landing/vette2.jpg";
import vt from "../../assets/Landing/VT.jpg";
import tahoe from "../../assets/Landing/tahoe.jpg";
import hike from "../../assets/Landing/vahike.jpg";
import greatfalls from "../../assets/Landing/greatfalls.jpg";

import indo from "../../assets/Landing/indo.JPG";
import polo from "../../assets/Landing/polo.jpg";
import utah from "../../assets/Landing/utah3.JPEG";
import utah2 from "../../assets/Landing/utah2.JPG";
import dalia from "../../assets/Landing/dalia.jpg";
import thai from "../../assets/Landing/thailand.jpg";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false); // Track sidebar visibility
  const [currentSection, setCurrentSection] = useState(0);

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
        if (scrollPosition >= section.offsetTop - (windowHeight * 0.5) && 
            scrollPosition < section.offsetTop + section.offsetHeight - (windowHeight * 0.5)) {
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
            <span className="hello">Hello,</span>
            <span className="intro">
              {" "}
              I'm <span className="name">Mitch Neat</span>{" "}
            </span>
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
                      backgroundColor: index === currentSection ? '#9239eb' : '#5c5b5b',
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
            <h2 className='abTitle'>Growing up south of Boston</h2>
            <div className="aboutSectionContent normalLayout">
                {/* skier animation as you scroll */}
                <p className='abpara'>
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
            </div>

          </section>
          <section className="aboutPage" id="about2">
            <h2 className='abTitle'>Exploring New England and Beyond</h2>
            <div className="aboutSectionContent reverseLayout">
                {/* boat rowing in background as you scroll, other sports? save football for tech*/}
                <p className='abpara'>
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
            </div>
          </section>
          <section className="aboutPage" id="about3">
            <h2 className='abTitle'>Graduating Virginia Tech</h2>
            <div className="aboutSectionContent normalLayout"> 
                {/* books stacking animation as you scroll?, football being thrown */}
                <p className='abpara'>
                  I studied Computational Modeling and Data Analytics with a concentration in Biological Sciences. Through my coursework and various internships I developed a versatile skill set across frontend and backend development, model development, dashboard design, analytical work, and data engineering. Outside of the classroom, I had a great time exploring southwest Virginia and rooting for the Hokies with the friends I made along the way.
                </p>
                <div className="aboutImages2 ab2">
                  <div className="row3">
                    <img src={vt} alt="ab4-1" className="abpLandscape" />
                  </div>
                  <div className="rowSplit">
                    <img src={hike} alt="ab4-3" className="abpP" />
                    <img src={grad} alt="ab4-2" className="abpP" />
                  </div>
                </div>
            </div>
          </section>
          <section className="aboutPage" id="about4">
            <h2 className='abTitle'>Moving to Arlington</h2>
            <div className="aboutSectionContent reverseLayout"> 
              
              {/* movig truck animation?, fireworks behind dc monument? - I don't know how these work yet */}
              <p className='abpara'>
                After spending some time in my beloved New England, I moved to Arlington to be closer to my office as work transitioned to a hybrid environment.
                At JDSAT, I've taken on a variety of roles, contributing to the needs of this small but rapidly growing company while continuing to sharpen my analytical and programming skills.
                This has given me the opportunity to explore a new city and region of the country with my friends in this post-grad chapter of my life
              </p>
              <div className="aboutImages">
                  {/* pics of dc, outerbanks?*/}
                  <img src={dc} alt="ab4-1" className="abp"/>
                  <img src={obx} alt="ab4-2" className="abp"/>
                  <img src={greatfalls} alt="ab4-3" className="abp"/>
              </div>
            </div>
          </section>
          <section className="aboutPage" id="about5">
            <h2 className='abTitle'>What have I been up to recently? </h2>
            <div className="aboutSectionContent normalLayout"> 
              
              {/* car spinning tires, puppy, plane taking off animations*/}
              {/* add dog names below picutes of them */}
              <p className='abpara'>
                I visitied my sister traveling around the world in Thailand and Indonesia and spent winters skiing around Salt Lake City and Lake Tahoe.
                I have also developed a passion for working on cars particularly an 88' Corvette I fixed up into a daily driver.
                Missing the companionship of a four legged best friend, I have been fostering dogs through a local shelter.
              </p>
              <div className="aboutImages ab1">
                  {/* utah skiing, indonesia, Dalia and Polo, the vette */}
                  <div className="row">
                    <img src={indo} alt="ab5-1" className="abp"/>
                    <img src={thai} alt="ab5-5" className="abp"/>
                  </div>
                  <div className="row">
                    <img src={utah2} alt="ab5-3" className="abp"/>  
                    <img src={tahoe} alt="ab5-3" className="abp"/>
                  </div>
                  <div className="row">
                    <img src={dalia} alt="ab5-4" className="abp"/>
                    <img src={polo} alt="ab5-2" className="abp"/>
                  </div>        
                  <div className="row">
                    <img src={car} alt="ab5-4" className="abp"/>
                    <img src={car2} alt="ab5-2" className="abp"/>
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
