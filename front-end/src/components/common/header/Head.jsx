import React from 'react'
import { Link } from 'react-router-dom';

import logo from '../../../images/ids_logo.png';

const Head = () => {
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
        </div>
    )
}

export default Head