import React from 'react'

import Head from './Head';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>  
            <Head/>
            <header>
                <div class="container">
                    <div class="main-head">
                        <nav className='nav'>
                            <ul>
                                <li> <Link to="/">Home</Link> </li>
                                <li> <Link to="about">About IDS</Link> </li>
                                <li> <Link to="program">Internship Program</Link> </li>
                                <li> <Link to="learn">Learning Hub</Link> </li>
                                <li> <Link to="team">Meet our Team </Link> </li>
                                <li> <Link to="contact">Contact Us</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header