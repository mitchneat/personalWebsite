import React from 'react';
import './navbar.css';
import logo from '../../assets/icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-content'>
                <img src={logo} alt='logo' className='logo'/>
                <div className='desktopMenu'>
                    <Link to='' className='desktopMenuListItem'>Home</Link>
                    {/* <Link to='/about' className='desktopMenuListItem'>About</Link> */}
                    <Link to='/photos' className='desktopMenuListItem'>Travel</Link>
                    <Link to='/resume' className='desktopMenuListItem'>Resume</Link>
                </div>
                <Link to='/contact' className='desktopMenuListItem'>
                    <button className='desktopMenuBtn'>
                        <img src='' alt='' className='desktopMenuImg' /> Contact Me
                    </button>
                </Link>
                
            </div>
        </nav>  
    );
    }

    export default Navbar;