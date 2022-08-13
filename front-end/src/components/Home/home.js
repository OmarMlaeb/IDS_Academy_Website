import React from 'react'

import img from './../../images/home_img.png';
import { Link } from 'react-scroll';

import './home.css'

const Home = () => {
    return (
        <div className='home' id='home'>
            <div className='container'>
                <div className='content_container'>
                    <div className='content'>
                        <p>New Online</p>
                        <p>Internship program</p>
                        <p>August 2022</p>
                        <p>Long before you sit down to put the pen</p>
                        <p>need to make sure you breathe</p>
                        <button href='/' className='button'>Join Our Program</button>
                    </div>
                </div>
                <div className='img_container'>
                    <div className='img'>
                        <Link to='/'>
                            <img src={img} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='about_container'>

            </div>
        </div>
    )
}

export default Home