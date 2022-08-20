import React, { useState }from 'react'

import img2 from './../../images/about_img.png';
import { Link } from 'react-scroll';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import './about.css';

const About = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        
        <div className='about' id='about'>
            <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
                <div className='box_container'>
                    <div className='box'>
                        <i className="fa-solid fa-calendar-days icon2"></i>
                        <h3 className='title'>Years of Experience</h3>
                        <span className='counter'>
                            {counterOn && <CountUp start={0} end={30} duration={1.5} delay={0}/>}
                            +
                        </span>
                    </div>

                    <div className='box'>
                        <i className="fa-solid fa-screwdriver-wrench icon2"></i>
                        <h3 className='title'>Developers</h3>
                        <span className='counter'>
                            {counterOn && <CountUp start={0} end={100} duration={1.5} delay={0}/>}
                            +
                        </span>
                    </div>

                    <div className='box'>
                        <i className="fa-solid fa-list-check icon2"></i>
                        <h3 className='title'>Projects</h3>
                        <span className='counter'>
                            {counterOn && <CountUp start={0} end={1200} duration={1.5} delay={0}/>}
                            +
                        </span>
                    </div>

                    <div className='box'>
                        <i className="fa-solid fa-users icon2"></i>
                        <h3 className='title'>Clients</h3>
                        <span className='counter'>
                            {counterOn && <CountUp start={0} end={2000} duration={1.5} delay={0}/>}
                            +
                        </span>
                    </div>
                </div>
            </ScrollTrigger>
            <div className='about_container2'>
                <div className='about_content2'>
                    <p className='font1'>Who We Are</p>
                    <p className='font2'>INTEGRATED DIGITAL SYSTEMS (IDS) is a software provider company established in 1991 with a pool of more than a hundred</p>
                    <p className='font2'>software engineers delivering full-cycle software development services and software products. Our core competencies lie in providing</p>
                    <p className='font2'>Enterprise Resource Planning (ERP) products, Archiving Solutions, Document Management, Wealth Management, Online Trading,</p>
                    <p className='font2'>e-commerce, and e-government solutions. We established a solid know-how across many industries such as financial markets, banking,</p>
                    <p className='font2'>manufacturing, publishing, communication and media, healthcare, telecom, and retail.</p>
                    <br></br>
                    <p className='font2'>We design and develop intuitive web and mobile applications to help businesses realize the power of data, social collaboration, cloud</p>
                    <p className='font2'>computing, and next-generation tools for the enterprise. We specialize in full stack development of custom software for startups, large</p>
                    <p className='font2'>corporations, and government bodies.</p>
                    <br></br>
                    <p className='font2'>The company is part of the Microsoft Partner Network and has been a Microsoft Certified Partner since 2001.</p>
                </div>
            </div>
            <div className='img_container2'>
                <div className='img2'>
                    <Link to='about'>
                        <img src={img2} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
