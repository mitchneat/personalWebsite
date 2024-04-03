import React from "react";
import "./landing.css";
import bg from "../../assets/bg2.jpg";
// import { Link } from "react-scroll";
// import hireImg from "../../assets/icon.png";

const Landing = () => {
    return (
        <section id="landing">
            <div className="top-section">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="intro">I'm <span className="name">Mitch Neat</span> </span>
                    <p  className="aboutpg">Thanks for coming to my website! To learn a little about me scroll down.<br/> Scroll down to learn more! </p>
                </div>

                <div className="profileImg">
                    <img src={bg} alt="Profile" className="bg"/>
                </div>
            </div>
            
            <br/>
            <br/>
            <div className="about-section">
                <h2><span class="line"></span> About <span class="line"></span></h2>
                <p>I grew up south of Boston and absolutely love New England.
                    To get out of my comfort zone I attended Virginia Tech and studied Computational Modeling and Data Analytics with a concentration in Biological Sciences.
                    Since graduating in 2021 I have been working at JDSAT wearing any hat the small but rapidly growing company needs from me;
                    spanning from analytical work, model development, dashboard design, frontend development, backend development, and much more.
                    Including my internships, I have worked in many different fields from solar energy, cyber security, research, insurance, and now Navy medicine.
                    This versatility has helped me develop into a well rounded programmer. 
                </p>
                <br/>
                <p>
                Out of the office you’ll find me skiing, hiking, fishing, playing pick up basketball or soccer, watching hockey (Go Bruins), 
                or finding some body of water to jump in. I love animals and am currently fostering my second dog right now. 
                I also love traveling to explore new places, meet new people, and try new foods. 
                My recent trips include skiing at Lake Tahoe this winter, skiing in Salt Lake City last winter, and trips to visit my sister in Indonesian and Thailand over the past year.
                To see more about some of the cool adventures I have been on check out the travel tab up top!
                </p>
            </div>
        </section>
    )
}
export default Landing;