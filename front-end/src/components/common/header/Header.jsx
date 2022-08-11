import React, { useState } from 'react'

import Head from './Head';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {

    const [click, setClick] = useState(false)

    const closeMenu = () => setClick(false)

    return (
        <div>  
            <Head/>
            <header>
                <div class="container">
                    <div class="main-head">
                        <nav className='nav'>
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <li className='nav-item'> <Link to="/" spy={true} smooth={true} offset={50} onClick={closeMenu}>Home</Link> </li>
                                <li className='nav-item'> <Link to="/about" spy={true} smooth={true} offset={50} onClick={closeMenu}>About IDS</Link> </li>
                                <li className='nav-item'> <Link to="/program" spy={true} smooth={true} offset={50} onClick={closeMenu}>Internship Program</Link> </li>
                                <li className='nav-item'> <Link to="/learn" spy={true} smooth={true} offset={50} onClick={closeMenu}>Learning Hub</Link> </li>
                                <li className='nav-item'> <Link to="/team" spy={true} smooth={true} offset={50} onClick={closeMenu}>Meet our Team </Link> </li>
                                <li className='nav-item'> <Link to="/contact" spy={true} smooth={true} offset={50} onClick={closeMenu}>Contact Us</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header