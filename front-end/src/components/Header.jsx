import React, { useState } from 'react'

import logo from '../images/ids_logo.png';
import './header.css';

import { Link } from 'react-scroll';


const Header = () => {

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <div>  
            <section className='head'>
                <div className='container-head flexSB'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt=""/>
                        </Link>
                    </div>

                    <div className='social'>
                        <i className="fa-brands fa-square-facebook icon"></i>
                        <i className='fa-brands fa-square-instagram icon'></i>
                        <i className='fa-brands fa-linkedin icon'></i>
                    </div>
                </div>
            </section>
            <div className='header'>
                <div class="container">
                    <div class="main-head">
                        <nav className='nav'>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className='nav-item'>
                                    <Link to="/" spy={true} smooth={true} offset={50} onClick={closeMenu}>Home</Link> 
                                </li>
                                <li className='nav-item'>
                                    <Link to="/about" spy={true} smooth={true} offset={50} onClick={closeMenu}>About IDS</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/program" spy={true} smooth={true} offset={50} onClick={closeMenu}>Internship Program</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/learn" spy={true} smooth={true} offset={50} onClick={closeMenu}>Learning Hub</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/team" spy={true} smooth={true} offset={50} onClick={closeMenu}>Meet our Team</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/contact" spy={true} smooth={true} offset={50} onClick={closeMenu}>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header