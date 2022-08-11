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
                            <a href='/'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about'>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default header
