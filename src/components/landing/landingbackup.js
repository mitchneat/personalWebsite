import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import "./landing.css";
import me from "../../assets/me3.jpg";

const Landing = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [sidebarVisible, setSidebarVisible] = useState(false); // Track sidebar visibility
    const [bgColor, setBgColor] = useState('rgb(30, 30, 30)');

    const circleHeight = 30; // Height of each circle
    const circleGap = 10; // Gap between circles
    const totalCircles = 5; // Total number of circles
    const lineHeight = (circleHeight * totalCircles) + (circleGap * (totalCircles - 1)); // Total height for the line

    const calculateBgColor = (scrollPosition, firstSectionTop, lastSectionBottom) => {
        const scrollRange = lastSectionBottom - firstSectionTop;
        const scrollRatio = Math.min((scrollPosition - firstSectionTop) / scrollRange, 1);

        // Interpolate background color from rgb(30, 30, 30) to rgb(255, 255, 255)
        const newColor = `rgb(${Math.floor(30 + (255 - 30) * scrollRatio)}, ${Math.floor(30 + (255 - 30) * scrollRatio)}, ${Math.floor(30 + (255 - 30) * scrollRatio)})`;
        return newColor;
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.aboutPage');
            const scrollPosition = window.scrollY;

            // Show the sidebar once the user reaches the first about section
            if (scrollPosition >= sections[0].offsetTop) {
                setSidebarVisible(true);
            } else {
                setSidebarVisible(false);
            }

            sections.forEach((section, index) => {
                if (section.offsetTop <= scrollPosition + window.innerHeight / 2 &&
                    section.offsetTop + section.offsetHeight > scrollPosition + window.innerHeight / 2) {
                    setCurrentSection(index); // Update current section index
                }
            });

            // Adjust background color based on the scroll position
            const firstSectionTop = sections[0].offsetTop;
            const lastSectionBottom = sections[sections.length - 1].offsetTop + sections[sections.length - 1].offsetHeight;

            if (scrollPosition >= firstSectionTop && scrollPosition <= lastSectionBottom) {
                const newColor = calculateBgColor(scrollPosition, firstSectionTop, lastSectionBottom);
                setBgColor(newColor);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSetActive = (target) => {
        const sections = document.querySelectorAll('.aboutPage');
        const firstSectionTop = sections[0].offsetTop;
        const lastSectionBottom = sections[sections.length - 1].offsetTop + sections[sections.length - 1].offsetHeight;

        // Adjust background color based on scroll-to position
        const scrollPosition = document.getElementById(target).offsetTop;
        const newColor = calculateBgColor(scrollPosition, firstSectionTop, lastSectionBottom);
        setBgColor(newColor);
    };

    return (
        <div style={{ backgroundColor: bgColor }}>
            <section id="landing">
                <div className="top-section">
                    <div className="introContent">
                        <span className="hello">Hello,</span>
                        <span className="intro"> I'm <span className="name">Mitch Neat</span> </span>
                        <p className="aboutpg">Thanks for coming to my website, scroll down to learn a little about me!</p>
                    </div>
                    <div className="profileImg">
                        <img src={me} alt="Profile" className="bg" />
                    </div>
                </div>

                <div className="bottom-section-land">
                    <h2>About</h2>
                </div>
            </section>

            <div className="aboutTimeline">
                {sidebarVisible && (
                    <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                        <div className="line" style={{ height: `${lineHeight}px` }}></div>
                        <div className="circles">
                            {Array.from({ length: 5 }, (_, index) => (
                                <Link
                                    to={`about${index + 1}`}
                                    smooth={true}
                                    duration={500}
                                    onSetActive={() => handleSetActive(`about${index + 1}`)}
                                    key={index}
                                >
                                    <div
                                        className="circle"
                                        id={`circle${index + 1}`}
                                        style={{
                                            backgroundColor: index === currentSection ? '#ffcc00' : '#5c5b5b',
                                        }}
                                    ></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                <div className="AboutContent">
                    <section className="aboutPage" id="about1">
                        <h2>About Section 1</h2>
                    </section>
                    <section className="aboutPage" id="about2">
                        <h2>About Section 2</h2>
                    </section>
                    <section className="aboutPage" id="about3">
                        <h2>About Section 3</h2>
                    </section>
                    <section className="aboutPage" id="about4">
                        <h2>About Section 4</h2>
                    </section>
                    <section className="aboutPage" id="about5">
                        <h2>About Section 5</h2>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Landing;
