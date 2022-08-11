import React from 'react'

import logo from './../../images/ids_logo.png';

import './header.css';
import { Link } from 'react-scroll';

const header = () => {
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
                    <ul>
                        <li className='nav-item'>
                            <Link to='/' spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' spy={true} smooth={true} offset={50} duration={500}>About IDS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/program' spy={true} smooth={true} offset={50} duration={500}>Internship Program</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/learn' spy={true} smooth={true} offset={50} duration={500}>Learning Hub</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' spy={true} smooth={true} offset={50} duration={500}>Meet our Team</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default header
