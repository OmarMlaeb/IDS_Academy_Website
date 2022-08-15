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
                        <p className='font1'>New Online</p>
                        <p className='font1'>Internship program</p>
                        <p className='font2'>August 2022</p>
                        <p className='font3'>Long before you sit down to put the pen</p>
                        <p className='font3'>need to make sure you breathe</p>
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
                <div className='about_content'>
                    <p className='font1'>About Us</p>
                    <p className='font2'>First, a disclaimer - the entire process of writing</p>
                    <p className='font2'>a blog post often takes more than a couple of</p>
                    <p className='font2'>hours, even if you can type eighty words as per</p>
                    <p className='font2'>minute and your writing skills are sharp</p>
                    <p className='font3'>Requirements</p>
                    <p className='font4'>- Experience with JavaScript</p>
                    <p className='font4'>- Good time-management skills</p>
                    <p className='font4'>- Experience with React</p>
                    <p className='font4'>- Experience with HTML / CSS</p>
                    <button href='/' className='button2'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Home