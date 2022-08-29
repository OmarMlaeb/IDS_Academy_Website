import React, {useState} from 'react'

import img3 from './../../images/program_img.png';
import { Link } from 'react-scroll';

import TextareaAutosize from 'react-textarea-autosize';

import './program.css';

const Program = () => {

    const [description] = useState("Organize your thoughts with an outline. Here's the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it'll help you make your message.");

    return (
        <div className='program' id='program'>
            <div className='program_container1'>
                <div className='program_content1'>
                    <p className='font1'>Welcome to Our Internship Program</p>
                    <p className='font2'>This program, students will apply for a three-month internship</p>
                    <p className='font2'>within many selected topics in the field of development.</p>
                </div>
            </div>
            <div className='program_container2'>
                <div className='img_container3'>
                    <div className='img3'>
                        <Link to='program'>
                            <img src={img3} alt=""/>
                        </Link>
                    </div>
                </div>
                <div className='program_content2'>
                    <label className='font1'>Project Name:</label>
                    <p className='form1'>9 Degree Award</p>
                    <label className='font1'>Project Type:</label>
                    <p className='form1'>Client Relationship</p>
                    <label className='font1'>Start Date:</label>
                    <p className='form1'>July 01, 2021</p>
                    <label className='font1'>End Date:</label>
                    <p className='form1'>August 31, 2021</p>
                    <label className='font1'>Capacity:</label>
                    <p className='form1'>12</p>
                    <label className='font1'>Current Registered:</label>
                    <p className='form1'>4</p>
                    <label className='font1'>Project Description:</label>
                    <TextareaAutosize className='form1' editable = {false} value = {description}></TextareaAutosize>
                    <button className='button'>
                        Register Here
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Program
