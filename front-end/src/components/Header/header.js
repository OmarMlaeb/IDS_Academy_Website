import React, { useState } from 'react'

import logo from './../../images/ids_logo.png';

import './header.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div>
            <div className='head'>
                <div className='container-head flexSB'>
                    <div className='logo'>
                        <Link to='/header'>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>

                    <div className='social'>
                        <i className="fa-brands fa-square-facebook icon"></i>
                        <i className='fa-brands fa-square-instagram icon'></i>
                        <i className='fa-brands fa-linkedin icon'></i>
                    </div>
                </div>
            </div>
            <div className='header'>
                <nav className='navbar'>
                    <div className='menubar' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'>
                            <Link to='home' spy={true} smooth={true} offset={-120} duration={200} onClick={closeMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='about' spy={true} smooth={true} offset={-120} duration={200} onClick={closeMenu}>About IDS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='program' spy={true} smooth={true} offset={-120} duration={200} onClick={closeMenu}>Internship Program</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='team' spy={true} smooth={true} offset={50} duration={200} onClick={closeMenu}>Meet our Team</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='contact' spy={true} smooth={true} offset={50} duration={200} onClick={closeMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
