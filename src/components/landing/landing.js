import React from "react";
import "./landing.css";
// import bg from "../../assets/bg2.jpg";
import me from "../../assets/me3.jpg"
// import { Link } from "react-scroll";
// import hireImg from "../../assets/icon.png";

const Landing = () => {
    return (
        <section id="landing">
            <div className="top-section">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="intro"> I'm <span className="name">Mitch Neat</span> </span>
                    <p  className="aboutpg">Thanks for coming to my website, scroll down to learn a little about me! </p>
                </div>

                <div className="profileImg">
                    <img src={me} alt="Profile" className="bg"/>
                </div>
            </div>
            
            <div class="bottom-section-land">
                <h2>About</h2>
            </div>
            <div className="paragraphsPart"> 
                <p>I grew up south of Boston and absolutely love New England. To get out of my comfort zone I attended Virginia Tech and studied 
                    Computational Modeling and Data Analytics with a concentration in Biological Sciences. Since graduating in 2021 I have been working for 
                    JDSAT in a wide variety of roles, addressing the needs of this small but rapidly growing company. My responsibilities have included analytical work, 
                    model development, dashboard design, frontend and backend development, and data engineering among others. Including my internships, 
                    I have worked in many different fields from solar energy, cyber security, research, insurance, and now Navy medicine. 
                    This versatility has helped me develop into a well rounded programmer.
                </p>
                <p>Out of the office, you'll often find me embracing the great outdoors, whether it's skiing, trekking through scenic trails, or casting a line while fishing. 
                    I'm also an avid sports enthusiast, enjoying pick-up games of basketball or soccer whenever I can. As a devoted hockey fan (Go Bruins!), 
                    I never miss a chance to catch a game. Additionally, I have a soft spot for animals and am currently fostering my second dog. 
                    Traveling is another one of my greatest passions, where I relish exploring new destinations, meeting diverse people, and experiencing different cuisines. 
                    Recent highlights include skiing in Lake Tahoe and Salt Lake City, as well as memorable trips to visit my sister in Indonesia and Thailand. 
                    For more glimpses into my adventures, feel free to explore the travel tab above!

                </p>
            </div>                
        </section>
    )
}
export default Landing;