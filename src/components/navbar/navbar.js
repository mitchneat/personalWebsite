import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/mn_logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Toggle the extended-content class on the content area
        const content = document.querySelector('.content');
        if (content) {
            content.classList.toggle('extended-content', !isMobileMenuOpen);
        }
    };

    return (
        <nav className="navbar">
            <div className='navbar-content-mobile'>
                <img src={logo} alt='logo' className='logoMobile'/>
                <div className='mobileMenu'>
                    <button className='mobileMenuBtn' onClick={toggleMenu}>Menu</button>
                    <div className={`mobileMenuItems ${isMobileMenuOpen ? 'active' : ''}`}>
                        <Link to='' className='mobileMenuItem'>Home</Link>
                        <Link to='/projects' className='mobileMenuItem'>Projects</Link>
                        <Link to='/photos' className='mobileMenuItem'>Travel</Link>
                        <Link to='/resume' className='mobileMenuItem'>Resume</Link>
                        <Link to='/contact' className='mobileMenuItem'>
                            <button className='mobileMenuBtn'>
                                <img src='' alt='' className='mobileMenuImg' /> Contact Me
                            </button>
                        </Link>
                    </div>
                </div>  
            </div>
            <div className='desktopWrapper'>
                <div className='navbar-content-desktop'>
                    <div>   
                    <img src={logo} alt='logo' className='logo'/>
                    </div>
                    
                    <div className='desktopMenu'>
                        <Link to='' className='desktopMenuListItem'>Home</Link>
                        <Link to='/projects' className='desktopMenuListItem'>Projects</Link>
                        <Link to='/photos' className='desktopMenuListItem'>Travel</Link>
                        <Link to='/resume' className='desktopMenuListItem'>Resume</Link>
                    </div>

                    <div> 
                    <Link to='/contact' className='desktopMenuListItem'>
                        <button className='desktopMenuBtn'>
                            <img src='' alt='' className='desktopMenuImg' /> Contact Me
                        </button>
                    </Link>
                    </div>
                </div>
                </div>
        </nav>
    );
}

export default Navbar;















// import React from 'react';
// import './navbar.css';
// import logo from '../../assets/mn_logo.png';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <div className='navbar-content'>
//                 <img src={logo} alt='logo' className='logo'/>
//                 <div className='desktopMenu'>
//                     <Link to='' className='desktopMenuListItem'>Home</Link>
//                     <Link to='/projects' className='desktopMenuListItem'>Projects</Link>
//                     <Link to='/photos' className='desktopMenuListItem'>Travel</Link>
//                     <Link to='/resume' className='desktopMenuListItem'>Resume</Link>
//                 </div>
//                 <Link to='/contact' className='desktopMenuListItem'>
//                     <button className='desktopMenuBtn'>
//                         <img src='' alt='' className='desktopMenuImg' /> Contact Me
//                     </button>
//                 </Link>
                
//             </div>
//         </nav>  
//     );
//     }

//     export default Navbar;